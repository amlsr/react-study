import { Button, TextField } from "@mui/material";
import { useState } from "react";

function Add(props) {
  const [user, setUser] = useState({ name: "", email: "" });
  function submitHandler(event) {
    event.preventDefault();
    props.addUser(user);
  }
  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUser({ ...user, [name]: value });
  }
  return (
    <div>
      <div className="col-md-12">
        <h6>Add User</h6>
      </div>
      <hr />
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <TextField
                fullWidth
                required
                id="name"
                name="name"
                label="Name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-md-12">
            <div className="form-group">
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="col-md-12">
            <div className="form-group">
              <Button
                variant="outlined"
                className="mx-4"
                onClick={props.onCancel}
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Add User
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Add;
