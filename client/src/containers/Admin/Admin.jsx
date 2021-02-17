import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
        <a class="waves-effect waves-light btn">Submit</a>
      </div>
    </div>
  );
};

export default Login;
