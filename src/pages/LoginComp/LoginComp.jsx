import { useNavigate } from 'react-router-dom';
import { LoginPageContainer, SignInForm, LoginInfo } from './LoginComp-styled';
import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';

function LoginComp() {
  const navigate = useNavigate();
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const validateUsername = (username) => {
    const isValid = username.length;
    if (isValid >= 8) {
      setUsernameIsValid(false);
      return false;
    } else {
      setUsernameIsValid(true);
      return true;
    }
  };

  const validatePassword = (password, setPasswordIsValid) => {
    const isValid = password.length;
    if (isValid >= 8) {
      setPasswordIsValid(false);
      return false;
    } else {
      setPasswordIsValid(true);
      return true;
    }
  };

  function registerPageButton() {
    navigate('/register');
  }

  const passwordInputRef = useRef(null);

  function EnterNextClick(e) {
    if (e.keyCode === 13) {
      passwordInputRef.current.focus();
    }
  }

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('body').style.color = '#000';
  }, []);

  return (
    <div>
      <LoginPageContainer>
        <div className="login-info-container">
          <LoginInfo>
            <div className="infodiv">
              <h1>LOGIN</h1>
              <p>Welcome back! Let&apos;s pick up where you left off.</p>
            </div>
          </LoginInfo>
        </div>
        <div className="login-form-container">
          <SignInForm>
            <input
              type="name"
              placeholder="Username"
              onKeyDown={EnterNextClick}
              value={username}
              onBlur={() => validateUsername(username)}
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              style={{
                border: usernameIsValid
                  ? '1px solid var(--color-danger)'
                  : '1px solid #E5E5E5',
              }}
            />

            <input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
              value={password}
              onBlur={() => validatePassword(password, setPasswordIsValid)}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: passwordIsValid
                  ? '1px solid var(--color-danger)'
                  : '1px solid #E5E5E5',
              }}
            />

            <p>
              Don’t have an account?
              <button className="register" onClick={registerPageButton}>
                Register
              </button>
            </p>

            <Button size="medium" className="login-button">
              Login
            </Button>
          </SignInForm>
        </div>
      </LoginPageContainer>
    </div>
  );
}

export default LoginComp;
