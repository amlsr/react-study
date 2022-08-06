import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <div className="container">
        <Box sx={{ display: "flex" }}>
          <AppBar component="nav">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                FUN
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#fff" }}>
                  <Link to={"/app"} style={{ color: "white" }}>
                    USERS
                  </Link>
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Outlet></Outlet>
        </Box>
      </div>
    </main>
  );
}

export default Layout;
