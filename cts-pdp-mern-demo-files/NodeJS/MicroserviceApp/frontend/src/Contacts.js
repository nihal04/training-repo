import { useEffect, useState } from "react";
import Contact from "./Contact";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/contact",{
        headers:{
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRoaXJhakBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTcwODU4Njk4MywiZXhwIjoxNzA4NTkwNTgzfQ.svNvzKIrM_lQPmo7CJIRbswURn-Zd4hbgm1dMoKtbkY'
        }
    })
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          {contacts.map((item) => (
            <Contact key={item._id}
              firstname={item.firstname}
              lastname={item.lastname}
              email={item.email}
              age={item.age}
              city={item.city}
              phone={item.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
