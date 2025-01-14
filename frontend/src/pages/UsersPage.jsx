import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Users from "../components/Users";

function UsersPage() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/auth/users")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="d-flex justify-content-center  align-items-start mt-5">
        {userData.length > 0
          ? userData.map((user, index) => (
              <>
                <Users
                  key={index}
                  name={user.name}
                  email={user.email}
                  password={user.PASSWORD}
                />
                <br />
              </>
            ))
          : "no user exists"}
      </div>
    </div>
  );
}

export default UsersPage;
