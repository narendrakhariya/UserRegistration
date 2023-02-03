import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </React.Fragment>
  );
}

export default App;
