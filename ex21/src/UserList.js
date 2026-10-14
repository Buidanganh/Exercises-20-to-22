
import React from "react";
import { Link } from "react-router-dom";
import { users } from "./data";

function UserList() {
  return (
    <div className="container">
      <h2>User List</h2>

      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${index}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
