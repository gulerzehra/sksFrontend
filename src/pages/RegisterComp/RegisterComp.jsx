import React from 'react';
import {
  RegisterPageContainer,
  SingUpForm,
  RegisterInfo,
} from './RegisterComp-styled';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterComp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordconfirm] = useState('');

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const usernameRef = useRef(null);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const checkPasswordsMatch = () => {
    const isValid = passwordconfirm.length;
    const match = password === passwordconfirm;
    if (isValid >= 8 && match) {
      setPasswordMatch(false);
      return false;
    } else {
      setPasswordMatch(true);
      return true;
    }
  };

  const validateEmail = (email) => {
    const isValid = emailRegex.test(email);
    setEmailIsValid(!isValid);
    return !isValid;
  };

  const validateName = (name, setNameIsValid) => {
    const isValid = name.trim() === '';
    setNameIsValid(isValid);
    return isValid;
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

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  function loginPageButton() {
    navigate('/login');
  }

  return (
    <div>
      <RegisterPageContainer>
        <div className="login-info-container">
          <RegisterInfo>
            <div className="infodiv">
              <h1>REGISTER</h1>
              <p>Let’s get started! Register for club access</p>
            </div>
          </RegisterInfo>
        </div>
        <div className="login-form-container">
          <SingUpForm>
            <input
              type="text"
              placeholder="username"
              onKeyDown={(e) => e.keyCode === 13 && usernameRef.current.focus()}
              value={username}
              onBlur={() => validateName(username, setUsernameIsValid)}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="username"
              style={
                usernameIsValid
                  ? { border: '1px solid red' }
                  : { border: '1px solid #e0e0e0' }
              }
            />
            <label htmlFor="username">
              *150 characters or fewer. Use only letters, digits, and @/./+/-/_.{' '}
            </label>

            <input
              type="email"
              placeholder="email"
              ref={emailRef}
              onKeyDown={(e) => e.keyCode === 13 && passwordRef.current.focus()}
              value={email}
              onBlur={() => validateEmail(email)}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              style={
                emailIsValid
                  ? { border: '1px solid red' }
                  : { border: '1px solid #e0e0e0' }
              }
            />

            <input
              type="password"
              placeholder="password"
              ref={passwordRef}
              onKeyDown={(e) => e.keyCode === 13 && confirmRef.current.focus()}
              value={password}
              onBlur={() => validatePassword(password, setPasswordIsValid)}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              style={
                passwordIsValid
                  ? { border: '1px solid red' }
                  : { border: '1px solid #e0e0e0' }
              }
            />
            <label htmlFor="">
              *Password requirements: Avoid similarity to personal info, 8+
              characters, no common choices, no all-numeric.
            </label>

            <input
              type="password"
              placeholder="password confirm"
              ref={confirmRef}
              value={passwordconfirm}
              onBlur={() => checkPasswordsMatch()}
              onChange={(e) => {
                setPasswordconfirm(e.target.value);
              }}
              id="passwordconfirm"
              style={{ borderColor: passwordMatch ? 'red' : '#e0e0e0' }}
            />

            <p>
              Zaten hesabın var mı?
              <button className="login" onClick={loginPageButton}>
                Login
              </button>
            </p>

            <button className="register-button">REGISTER</button>
          </SingUpForm>
        </div>
      </RegisterPageContainer>
    </div>
  );
}

export default RegisterComp;
