import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appActions, getWishlist } from "../redux/appSlice";

export default function Favourite(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ren, setRen] = useState(false);
  const [wishlist, setWishList] = useState([]);
  
  //const [movieName, setMovieName] = useState("Avengers");
  
  // const wishData = useSelector((state)=> state.app.wishData) || [];
  // console.log("wishData", wishData);
  // const [wishlist, setWishList] = useState(wishData[0].wish);
//   const [cart, setCart] =  useState([]);
//   const [ren, setRen] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/wishlist/movie/${localStorage.getItem("email")}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("res", res);
        if(res.data.length!==0){
          setWishList(res.data[0].wish);
        } else setWishList([]);
        
        dispatch(getWishlist());
        //setProduct(res.data);
      });
  }, [ren]);

const handleView = (id) =>{
  dispatch(appActions.view(id));
  navigate("/view");
}

const handleDelete = (id)=>{
  let val = wishlist.filter((ele)=>ele._id!==id);
  //setWishList(obj);
  axios
   .put(`http://localhost:9000/wishlist/movie/${localStorage.getItem("email")}`, val,
   {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
   .then((res) => {
       console.log("res", res);
       setRen(!ren);
    })
    .catch((err) => alert(err.response.data.message));
}

  return (
    <div className="container mt-2">
      {wishlist.length!==0?(<div className="row">
        <div className="text-center" style={{fontSize:"30px", fontWeight:"700", paddingBottom:"30px"}}>Favourites</div>
        {wishlist.map((item) => (
          <div className="col-md-3" key={item.imdbID}>
            <div className="card mb-3 shadow">
              <img src={item.Poster} className="card-img-top" alt="user" />
              <div className="card-body" style={{backgroundColor:"lightsteelblue"}}>
                <h5 className="card-title" style={{fontWeight:"700"}}>
                  {item.Title}
                </h5>
                <h6 style={{fontWeight:"400"}}>{item.imdb_url}</h6>
                <h5 className="card-title" style={{fontWeight:"600"}}>{`Year ${item.Year}`}</h5>
                <button className="btn btn-primary" onClick={()=>handleView(item.imdbID)}>View</button>
                <button className="btn btn-danger float-end" onClick={()=>handleDelete(item._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>):(<div>
        <div className="text-center" style={{fontSize:"30px", fontWeight:"700", paddingBottom:"30px"}}>Favourites</div>
        <div className="text-center" style={{fontSize:"20px", fontWeight:"500", color:"grey"}}>Your favourite list is empty!</div>
        <div>
           <img src="images/empty-cart.jpg" width="300" height="400" style={{marginLeft:"500px"}}/>
        </div>
      </div>)}
    </div>
  );
}
