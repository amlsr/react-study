import { Card } from "@mui/material";
import Loginform from "./Loginform";

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5">
                <Card variant="outlined">
                    <div className="text-center p-5">
                        <h4>Login</h4>
                        <Loginform />
                    </div>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Login;