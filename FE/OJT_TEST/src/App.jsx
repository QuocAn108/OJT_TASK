import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FormLogin from "./Components/Login/formLogin";
import FormRegister from "./Components/Register/formRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
