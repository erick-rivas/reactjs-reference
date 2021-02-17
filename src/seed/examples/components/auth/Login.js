import React, { useState } from "react";
import { usePost } from "seed/api";
import View from "seed/examples/views/auth/Login";

function Login(props) {
  const [error, setError] = useState(null);
  const [cLogin, qLogin] = usePost("/auth/login", {
    onCompleted: (data) => {
      sessionStorage.setItem("token", data.key);
      sessionStorage.setItem("id", data.user);
      props.history.replace("/");
    },
    onError: (error) => setError("Invalid user or password")
  });

  const onSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    cLogin({ email: email, password: password });
  };

  return <View 
    error={error}
    onSubmit={onSubmit}
  />;
}

export default Login;