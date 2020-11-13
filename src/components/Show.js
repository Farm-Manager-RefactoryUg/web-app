import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Show() {
  
    const [users,setUser] = useState([]);
useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
return(
    <>
    {users && users.map((user)=>
   <h1>{user.name}</h1>
   )}

    </>
  );
}
