import React, { useEffect } from "react";
import { usePost } from "seed/api";
import View from "seed/examples/views/auth/Logout";

function Logout(props) {
  const [logout, onLogout] = usePost("/auth/logout", {
    onCompleted: (data) => {
      sessionStorage.clear();
      props.history.replace("/");
    }
  });
  useEffect(() => logout(), []);
  return <View />;
}

export default Logout;