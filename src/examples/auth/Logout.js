import React, { useEffect } from "react";
import cx from "classnames";
import { usePost } from "seed/api";
import styles from "resources/css/examples/auth/Logout.module.css";

function Logout(props)
{
  const [logout, onLogout] = usePost("/auth/logout", {
    onCompleted: (data) =>
    {
      sessionStorage.clear();
      props.history.replace("/");
    }
  });

  useEffect(() => logout(), []);

  return (
    <div className={styles.module}></div>
  );
}

export default Logout;
