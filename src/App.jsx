import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1 className="header">Welcome!</h1>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
