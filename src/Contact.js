import React, { useState } from "react";

export default function Contact(props) {
  const [user, setUser] = useState(props.props);

  return (
    <div>
      <p>Address: {user.address}</p>
      <p>Email: {user.email}</p>
      <p>Phone number: {user.phone}</p>
    </div>
  );
}
