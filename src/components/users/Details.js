import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function Details(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    props.deleteUser(props.user.id);
    setOpen(false);
  };
  return (
    <div className="row">
      <br />
      <br />
      <div className="col-md-12">
        <h6>User Details</h6>
      </div>
      <hr />
      <br />
      <div className="col-md-12">
        <span>Name : </span>
        <b>{props.user.name}</b>
      </div>
      <br />
      <br />
      <div className="col-md-12">
        <span>Email : </span>
        <b>{props.user.email}</b>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div className="col-md-12">
        <Button variant="outlined" className="mx-4" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleClickOpen}>
          Delete
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure, you want to delete "{props.user.name}" ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Details;
