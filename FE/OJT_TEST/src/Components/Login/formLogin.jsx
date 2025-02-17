import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { loginContainer, loginForm, formGroup, loginInput, loginButton } =
    styles;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://localhost:7071/api/user/login",
        null,
        {
          params: { username, password },
        }
      );

      setSuccessMessage(response.data.message || "Login successful!");
      console.log("Token:", response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login failed!");
      } else {
        setErrorMessage("Cannot connect to server.");
      }
    }
  };

  return (
    <div className={loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={loginForm}>
        <div className={formGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={loginInput}
          />
        </div>
        <div className={formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={loginInput}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit" className={loginButton}>
          Login
        </button>
      </form>
      <p>
        Don`t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default FormLogin;
