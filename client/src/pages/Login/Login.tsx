import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";
import { TRUE } from "sass";

function Login() {
  const [usernameInput, setUsernameInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {          
      // admin@email.com
      //password
      const message = await login(usernameInput, passwordInput);
      setMessage(message);
      setMessage('submitted!');
    } catch (error) {
      console.log(error);
      setMessage('INVALID INPUT');
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <form>        
          <input type = "text" placeholder = 'username' id = 'username-input' required onChange= {e => setUsernameInput(e.target.value)}></input>
          <input type = "text" placeholder = 'password' id = 'password-input' required onChange= {e => setPasswordInput(e.target.value)}></input>
          <button onClick={() => attemptLogin()}>Login!</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </Page>
  );
}

export default Login;
