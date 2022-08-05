import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" component={Layout} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
