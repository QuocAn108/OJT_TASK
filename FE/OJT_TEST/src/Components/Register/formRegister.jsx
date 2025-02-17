import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const FormRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    registerContainer,
    registerForm,
    formGroup,
    registerInput,
    registerButton,
    errorMessageS,
    successMessages,
  } = styles;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7071/api/user/create",
        { username, email, password }
      );

      setSuccessMessage(response.data.message || "Registration successful!");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Registration failed!");
      } else {
        setErrorMessage("Cannot connect to server.");
      }
    }
  };

  return (
    <div className={registerContainer}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className={registerForm}>
        <div className={formGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={registerInput}
          />
        </div>
        <div className={formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={registerInput}
          />
        </div>
        <div className={formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={registerInput}
          />
        </div>
        <div className={formGroup}>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={registerInput}
          />
        </div>
        {errorMessage && <p className={errorMessageS}>{errorMessage}</p>}
        {successMessage && <p className={successMessages}>{successMessage}</p>}
        <button type="submit" className={registerButton}>
          Register
        </button>
      </form>
      <p>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
};

export default FormRegister;
