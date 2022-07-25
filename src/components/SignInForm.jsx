import React from 'react';
import './SigninForm.scss';

const SigninForm = () => {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true"></input>

      <div className="signup">
        <form>
          <label for="chk" aria-hidden="true" className="form-label">
            Sign up
          </label>

          <div className="form-info">
            <input
              className="form-input"
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            ></input>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            ></input>
            <input
              className="form-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            ></input>
            <button className="btn-signup">Sign up</button>
          </div>
        </form>
      </div>

      <div className="login">
        <form>
          <label for="chk" aria-hidden="true" className="form-label">
            Login
          </label>
          <div className="form-info">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            ></input>
            <input
              className="form-input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            ></input>
            <button className="btn-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
