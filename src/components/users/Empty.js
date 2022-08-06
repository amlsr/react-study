import { Button } from "@mui/material";


function Empty(props) {
    return(
        <div className="text-center vertical-center">
            <Button variant="contained" onClick={props.onAdd}>Add User</Button>
        </div>
    );
}

export default Empty;