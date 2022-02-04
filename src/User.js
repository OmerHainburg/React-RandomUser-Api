import React, { useState } from "react";
import Contact from "./Contact";

export default function User(props) {
  console.log(props);
  console.log(props.props);
  const [userList, setUserList] = useState(props.props);
  console.log(userList);

  return (
    <div>
      {userList.map((user) => (
        <div>
          <img src={user.picture} alt={user.name} />
          <p>Name : {user.name}</p>
          <p>Age : {user.age}</p>
          <Contact props={user} />
        </div>
      ))}
    </div>
  );
}
