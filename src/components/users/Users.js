import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import Details from "./Details";
import Empty from "./Empty";
import Userslist from "./Userslist";
import Add from "./Add";

function Users() {
  const [userState, setUserState] = useState({
    users: [],
    loader: true,
    lastUsedId: 0,
    viewMode: "empty",
  });

  useEffect(() => {
    fetch("../data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserState({
          ...userState,
          users: data.data,
          loader: false,
          lastUsedId: data.data.length,
        });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function viewUser(user) {
    setUserState({ ...userState, viewMode: "details", selectedUser: user });
  }

  function onCancel() {
    setUserState({ ...userState, viewMode: "empty" });
  }

  function onAdd() {
    setUserState({ ...userState, viewMode: "add" });
  }

  function addUser(user) {
    user.id = userState.lastUsedId + 1;
    let users = userState.users;
    users.push(user);
    setUserState({
      ...userState,
      viewMode: "empty",
      users: users,
      lastUsedId: userState.lastUsedId + 1,
    });
    alert("User added successfully");
  }

  function deleteUser(userId) {
    let users = userState.users;
    let filteredArray = users.filter((item) => item.id !== userId);
    setUserState({
      ...userState,
      viewMode: "empty",
      users: filteredArray,
    });
    alert("User deleted successfully");
  }
  return (
    <div>
      <Typography variant="h5" component="h5">
        Users
      </Typography>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="body-div">
            <div className="card h-100">
              <div className="card-body">
                {userState.loader ? (
                  <Spinner />
                ) : (
                  <Userslist users={userState.users} viewUser={viewUser} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="body-div">
            <div className="card h-100">
              <div className="card-body">
                {userState.viewMode === "empty" && <Empty onAdd={onAdd} />}
                {userState.viewMode === "details" && (
                  <Details
                    user={userState.selectedUser}
                    onCancel={onCancel}
                    deleteUser={deleteUser}
                  />
                )}
                {userState.viewMode === "add" && (
                  <Add onCancel={onCancel} addUser={addUser} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
