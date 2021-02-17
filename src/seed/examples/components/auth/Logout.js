import React, { useEffect } from "react";
import { usePost } from "seed/api";
import View from "seed/examples/views/auth/Logout";

function Logout(props) {
  const [clogout, qLogout] = usePost("/auth/logout", {
    onCompleted: (data) => {
      sessionStorage.clear();
      props.history.replace("/");
    }
  });
  useEffect(() => clogout(), []);
  return <View />;
}

export default Logout;