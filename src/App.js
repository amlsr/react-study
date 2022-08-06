import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={<Navigate replace to="/login"></Navigate>}
          ></Route>
          <Route path="/app" element={<Layout />}>
            <Route path="/app/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
