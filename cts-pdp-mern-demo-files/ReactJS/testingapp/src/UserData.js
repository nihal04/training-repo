import React from "react";

export default function UserData(Component) {
  const NewComponent = () => {
    const [users, setusers] = React.useState([]);
    React.useEffect(() => {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setusers(data.users));
    }, []);
    return <Component users={users}/>
  };
  return NewComponent;
}
