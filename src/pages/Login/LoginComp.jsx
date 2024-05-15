import { useNavigate } from 'react-router-dom';
import { LoginPageContainer, SignInForm, LoginInfo } from './LoginComp-styled';
import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import { login } from '../../data/data';
import {
  PASSWORD_MINIMUM_LENGTH,
  USERNAME_MINIMUM_LENGTH,
} from '../../utils/constants';
import { store } from '../../data/store';
import { loginSuccess } from '../../data/userSlice';
import { useSelector } from 'react-redux';

function LoginComp() {
  const navigate = useNavigate();
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const { isLoggedIn } = useSelector((state) => state.user);

  const validateUsername = (username) => {
    const isValid = username.length;
    if (isValid >= USERNAME_MINIMUM_LENGTH) {
      setUsernameIsValid(false);
      return false;
    } else {
      setUsernameIsValid(true);
      return true;
    }
  };

  const validatePassword = (password, setPasswordIsValid) => {
    const isValid = password.length;
    if (isValid >= PASSWORD_MINIMUM_LENGTH) {
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

  async function loginHandler() {
    // if (validateUsername(username) || validatePassword(password)) {
    //   alert('Please enter a valid username and password');
    // } else {
    //   alert('Login successful');
    //   navigate('/');
    // }
    const response = await login(username, password);
    const {
      access: accessToken,
      refresh: refreshToken,
      user_id,
      role,
    } = response;
    if (!accessToken) {
      alert('Login failed');
      return;
    }
    store.dispatch(loginSuccess({ accessToken, refreshToken, user_id, role }));
    navigate('/');
    // if (accessToken) {
    //   localStorage.setItem('accessToken', accessToken);
    //   localStorage.setItem('refreshToken', refreshToken);
    //   localStorage.setItem('user', JSON.stringify(user));
    //   localStorage.setItem('role', role);
    //   navigate('/');
    // } else {
    //   alert('Login failed');
    // }
  }

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('body').style.color = '#000';
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

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

            <Button
              size="medium"
              className="login-button"
              onClick={loginHandler}
            >
              Login
            </Button>
          </SignInForm>
        </div>
      </LoginPageContainer>
    </div>
  );
}

export default LoginComp;
