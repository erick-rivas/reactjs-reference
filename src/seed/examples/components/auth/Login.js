/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePost } from "seed/api";
import View from "seed/examples/components/auth/Login.view";

function Login({ history }) {

  const [rememberMe, setRememberMe] = useState(false);
  const [callLogin, reqLogin] = usePost("/auth/login", {
    onCompleted: (data) => {
      if (rememberMe) { //Store data in localStorage
        localStorage.setItem("token", data.key);
        localStorage.setItem("id", data.user);
      }
      sessionStorage.setItem("token", data.key);
      sessionStorage.setItem("id", data.user);
      history.replace("/");
    },
    includeAuth: false
  });

  const onSubmit = (values) => {
    const {email, password, rememberMe} = values;
    setRememberMe(rememberMe)
    callLogin({ email: email, password: password });
  };

  const error = reqLogin.error ? "Invalid user or password" : null;

  return <View
    error={error}
    onSubmit={onSubmit}
  />;
}

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default Login;