import { TextField } from "@mui/material";

function Loginform() {
  return (
    <form>
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
      </div>
    </form>
  );
}

export default Loginform;
