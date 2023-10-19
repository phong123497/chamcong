import "./index.css";
import ForgetPass from "./components/PassWord/ForgetPass";
import Login from "./components/Register/Login";
import Tongquan from "./components/Admin/Tongquan";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tongquan />} />
      <Route path="/forget-pass" element={<ForgetPass />} />
    </Routes>
  );
}

export default App;
