import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [lisfOfUSers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontSize: "40px", textAlign: "center" }}>
      <h1>List of users</h1>
      <ul style={{ listStyleType: "none" }}>
        {lisfOfUSers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
