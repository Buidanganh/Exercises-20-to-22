
import React from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "./data";

function UserDetail() {
  const { id } = useParams();

  const user = users[Number(id)];

  if (!user) {
    return (
      <div className="container">
        <h2>User not found!</h2>
        <Link to="/users">Back to User List</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>User Detail</h2>

      <h3>
        {user.firstName} {user.lastName} : {user.age}
      </h3>

      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Age: {user.age}</p>

      <Link to="/users">Back to User List</Link>
    </div>
  );
}

export default UserDetail;
