import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Loginform() {
  let navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    navigate('/app/users');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <TextField
              fullWidth
              required
              id="username"
              name="username"
              label="Username"
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
              id="password"
              name="password"
              label="Password"
              type="password"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="col-md-12">
          <div className="form-group">
          <Button type="submit" variant="contained">Contained</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Loginform;
