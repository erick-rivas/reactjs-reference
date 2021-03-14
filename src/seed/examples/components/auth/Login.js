import React from "react";
import { usePost } from "seed/api";
import View from "seed/examples/views/auth/Login";

function Login(props) {
  const [callLogin, qLogin] = usePost("/auth/login", {
    onCompleted: (data) => {
      sessionStorage.setItem("token", data.key);
      sessionStorage.setItem("id", data.user);
      props.history.replace("/");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    callLogin({ email: email, password: password });
  };

  const error = qLogin.error ? "Invalid user or password" : null

  return <View
    error={error}
    onSubmit={onSubmit}
  />;
}

export default Login;