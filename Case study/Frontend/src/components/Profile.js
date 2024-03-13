import React, {useState, useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appActions } from "../redux/appSlice";

export default function Profile(props){
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [profileData, setProfileData] = useState({});

    //console.log("viewId", useSelector((state)=> state.app.viewId));

    useEffect(() => {
      axios
        .get(`http://localhost:9000/movie/user/${localStorage.getItem("email")}`)
        .then((res) => {
          console.log("res", res);
          setProfileData(res.data);
          dispatch(appActions.getProfile(res.data));
        });
    }, []);

    const handleBack = () =>{
      navigate("/result");
    }
    console.log("profile", profileData);

  
    return (
        <div className="container bg-dark-subtle rounded p-4">
          <div className="row">
            {profileData!==""&&(<div className="col-md-3 offset-md-4 mt-3" style={{width:"65%"}}>
            <img src="images/icons8-user-default-96.png" style={{width:"200px", height:"200px"}} className="card-img-top" alt="image" />
              <h4 style={{fontWeight:"600"}}>Name:</h4>
              <h5 style={{fontWeight:"400"}}>{`${profileData.firstname} ${profileData.lastname}`}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Email:</h4>
              <h5 style={{fontWeight:"400"}}>{profileData.email}</h5><br/>

              <h4 style={{fontWeight:"600"}}>Age:</h4>
              <h5 style={{fontWeight:"400"}}>{profileData.age}</h5><br/>
              
              <h4 style={{fontWeight:"600"}}>Phone number:</h4>
              <h5 style={{fontWeight:"400"}}>{profileData.phonenumber}</h5><br/>

              <div className="mt-2">
                <button className="btn btn-primary" onClick={()=> navigate("/updateprofile")}>Update profile</button>
              </div>

            </div>)}
          </div>
        </div>
    )
}