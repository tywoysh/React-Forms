import { useState } from "react";

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();
    try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
        { 
            method: "POST", 
            headers: { 
              "Content-Type": "application/json" 
            }, 
            body: JSON.stringify({ 
              username: {username}, 
              password: {password} 
            }) 
          })
        const result = await response.json();
        console.log(result);
        setToken(result.token);
    } catch (error) {
        setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <label>
        Username: <input value={username} onChange={(event)=>setUsername(event.target.value)}/>
      </label>
      <label>
        Password: <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
      </label>
      <button>Submit</button>
    </form>
  );
}
