/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useEffect, useState } from "react";
import { useGetCall } from "seed/api";
import View from "seed/examples/components/Home.view";

function Home() {
   const [isAuth, setIsAuth] = useState(false)
   const [callAuth, reqCall] = useGetCall("/auth/user", "", {
    onCompleted: (data) => setIsAuth(true),
    onError: () => window.location.replace("/examples/login")
      // IMPORTANT: Switch to normal login (e.g /login) when copying
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