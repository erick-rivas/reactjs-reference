/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useEffect, useState } from "react";
import { useGetCall } from "seed/api";
import View from "seed/examples/components/Home.view";

function Home() {
  const [isAuth, setIsAuth] = useState(false);
  const [callAuth, reqCall] = useGetCall("/auth/user", "", {
    onCompleted: (data) => {
      // Optional: Include extra validation for user role
      setIsAuth(true);
    },
    onError: () => {
      sessionStorage.clear();
      localStorage.clear();
      window.location.replace(`/examples/login?next=${encodeURIComponent(new URL(window.location.href).pathname)}`);
      // IMPORTANT: Switch to normal login (e.g /login) when copying
    }
  })
  useEffect(() => {
    if (localStorage.getItem("id") != null) { //Preload data from localStorage
      sessionStorage.setItem("token", localStorage.getItem("token"));
      sessionStorage.setItem("id", localStorage.getItem("id"));
    }
    callAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!isAuth) return null;
  return <View />;
}

Home.propTypes = {};

export default Home;