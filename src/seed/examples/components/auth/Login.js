/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useEffect, useState } from "react";
import { usePost, useGetCall } from "seed/api";
import PropTypes from "prop-types";
import View from "seed/examples/components/auth/Login.view";

function Login(props) {
  const params = new URLSearchParams(props.location.search);
  const [rememberMe, setRememberMe] = useState(false);
  const [callAuth, reqCall] = useGetCall("/auth/user", "", {
    onCompleted: data => window.location.replace(params.get("next") ?? "/example") // If user is already logged
    // IMPORTANT: Switch to normal home(e.g /) when copying
  })

  const [callLogin, reqLogin] = usePost("/auth/login", {
    onCompleted: (data) => {
      if (rememberMe) { //Store data in localStorage
        localStorage.setItem("token", data.key);
        localStorage.setItem("id", data.user);
      }
      sessionStorage.setItem("token", data.key);
      sessionStorage.setItem("id", data.user);
      props.history.replace("/");
    },
    includeAuth: false
  });

  useEffect(() => {
    if (localStorage.getItem("id") != null) { //Preload data from localStorage
      sessionStorage.setItem("token", localStorage.getItem("token"));
      sessionStorage.setItem("id", localStorage.getItem("id"));
    }
    callAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = (values) => {
    const { email, password, rememberMe } = values;
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
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Login;