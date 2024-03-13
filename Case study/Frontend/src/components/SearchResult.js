import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { appActions, getWishlist } from "../redux/appSlice";

export default function SearchResult(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movielist, setMovieList] = useState([]);
  const [movieName, setMovieName] = useState("Avengers");
  const [ren, setRen] = useState(false);
  const wishObj = useSelector((state)=> state.app.wishData) || [];

  useEffect(() => {
    axios
      .get(`http://localhost:9000/movielist/list/y=&apikey=772d0528&s=${movieName}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("res", res.data.Search);
        dispatch(getWishlist());
        if(res.data.Search.length !== 0){
          setMovieList(res.data.Search);
        } else {
          alert("Searched movie does not exit.")
        }
      })
      .catch(err=>{
        console.log("Error occured", err);
      });
  }, [ren]);

const handleFavourite = (item)=>{
  if(wishObj.length !== 0){
    let arr = [...(wishObj[0].wish)];
    arr.push(item);
    axios
   .put(`http://localhost:9000/wishlist/movie/${localStorage.getItem("email")}`, arr, 
   {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
   .then((res) => {
       console.log("res", res);
       alert("Added to favourites.");
       setRen(!ren);
    })
    .catch((err) => alert(err.response.data.message));
  } else {
    axios
    .post(`http://localhost:9000/wishlist/movie/${localStorage.getItem("email")}`, item,
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
        console.log("res", res);
        alert("Added to favourites.");
        setRen(!ren);
     })
     .catch((err) => alert(err.response.data.message));
  }
}

  return (
    <div className="container mt-2">
      <div className="row">
        <div style={{display:"flex", paddingTop:"10px", paddingBottom:"30px"}}>
           <input className="form-control mr-sm-2" type="search" placeholder="Movie name . . ." aria-label="Search" style={{borderRadius:"20px 0 0 20px", borderWidth:"2px", borderColor:"black"}} onChange={(e)=>setMovieName(e.target.value)}/>
           <button className="btn btn-outline-success my-2 my-sm-0" type="button" style={{borderRadius:"0 20px 20px 0", borderColor:"black", borderWidth:"2px", backgroundColor:"lightsteelblue", color:"black", fontWeight:"600", width:"120px"}} onClick={()=>setRen(!ren)}>Search</button>
        </div>
        {movielist.map((item) => (
          <div className="col-md-3" key={item.imdbID}>
            <div className="card mb-3 shadow">
              <img src={item.Poster} className="card-img-top" alt="image" />
              <div className="card-body" style={{backgroundColor:"lightsteelblue"}}>
                <h5 className="card-title" style={{fontWeight:"700"}}>
                  {item.Title}
                </h5>
                <h6 style={{fontWeight:"400"}}>{item.imdb_url}</h6>
                <h5 className="card-title" style={{fontWeight:"600"}}>{`Year ${item.Year}`}</h5>
                <button className="btn btn-primary" onClick={()=>handleFavourite(item)}>Add to Favourites</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
