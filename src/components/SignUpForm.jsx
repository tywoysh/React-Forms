import { useState } from "react";
import Confetti from "react-confetti";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: { username },
            password: { password },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
      setMessage(result.message);
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-header">Sign Up</h2>
      {error && <p>{error}</p>}
      <label className="username form-element">
        Username:{" "}
        <input
          className="user-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label className="password form-element">
        Password:{" "}
        <input
          className="pass-input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button className="submit form-element">Submit</button>
      {message && <p className="success">{message}</p>}
      {showConfetti && (
        <Confetti
        //   numberOfPieces={200}
        //   confettiSource={{x:450,y:700}} // Specify the confetti source position
        //   wind={0.05 + Math.random() * 0.05}
        //   initialVelocityX={Math.random() * 10 - 5}
        />
      )}
    </form>
  );
}
