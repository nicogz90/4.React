import React from "react";
import { Link } from "react-router-dom";
import { users } from "../users";

function Users() {
  return (
    <div>
      Users:
      <div>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          {users.map((user) => (
            <li key={user.id}>
              <Link to={"/users/" + user.id}> {user.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
