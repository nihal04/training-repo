import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function View(props){
  const navigate = useNavigate();
    const [viewData, setViewData] = useState([])

    const viewId = useSelector((state)=> state.app.viewId);
    //console.log("viewId", useSelector((state)=> state.app.viewId));

    useEffect(() => {
      axios
        .get(`http://localhost:9000/movielist/list/&apikey=772d0528&i=${viewId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("res", res);
          setViewData(res.data)
          //setMovieList(res.data.Search);
          //setProduct(res.data);
        });
    }, []);

    const handleBack = () =>{
      navigate("/favourite");
    }

  
    return (
        <div className="container bg-dark-subtle rounded p-4">
          <div className="row">
            <div className="col-md-3">
              <h1 className="display-7" style={{fontWeight:"400"}}>{viewData.Title}</h1>
              <img src={viewData.Poster} className="card-img-top" alt="image" />
              <div className="mt-2 mb-5">
                <button className="btn btn-success" onClick={handleBack}>Go back</button>
              </div>
              
            </div>
            <div className="col-md-3 offset-md-1 mt-3" style={{width:"65%"}}>
              <h4 style={{fontWeight:"600"}}>Year:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Year}</h5><br/>

              <h4 style={{fontWeight:"600"}}>IMDB Rating:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.imdbRating}</h5><br/>
              
              <h4 style={{fontWeight:"600"}}>IMDB Votes:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.imdbVotes}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Genre:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Genre}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Plot:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Plot}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Director:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Director}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Writer:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Writer}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Stars:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Actors}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Awards:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Awards}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Country:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Country}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Language:</h4>
              <h5 style={{fontWeight:"400"}}>{viewData.Language}</h5><br/>
            </div>
          </div>
        </div>
    )
}