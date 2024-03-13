import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Users() {
  const { data, isLoading } = useQuery("users", () => {
    return axios.get("https://dummyjson.com/users");
  });
  if(isLoading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <ul>
        {
            data.data.users.map(item => <li>{item.firstName}</li>)
        }
      </ul>
    </div>
  );
}
