import React, { useEffect } from "react";
import { usePost } from "seed/api";
import View from "seed/examples/views/auth/Logout";

function Logout(props) {
  const [cLogout] = usePost("/auth/logout", {
    onCompleted: () => {
      sessionStorage.clear();
      props.history.replace("/");
    }
  });
  useEffect(() => cLogout(), []);
  return <View />;
}

export default Logout;