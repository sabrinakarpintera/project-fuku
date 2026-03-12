import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/Fuku/src/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (data.message === "Login successful") {
      navigate("/dashboard");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>

        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>{message}</p>

        <p>
          No account? 
          <button type="button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </p>

      </form>

    </div>
  );
}