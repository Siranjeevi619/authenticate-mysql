import React from "react";

function Users({ name, email, password }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="card-title">{name}</div>
          <div className="card-subtitle">{email}</div>
          <div className="card-text">{password}</div>
        </div>
      </div>
    </div>
  );
}

export default Users;
