import React, { useEffect } from "react";
import { usePost } from "seed/api";
import Render from "seed/examples/renders/auth/Logout";

function Logout(props) {
  const [clogout, qLogout] = usePost("/auth/logout", {
    onCompleted: (data) => {
      sessionStorage.clear();
      props.history.replace("/");
    }
  });
  useEffect(() => clogout(), []);
  return <Render />;
}

export default Logout;