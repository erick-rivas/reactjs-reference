import React, { useEffect, useState } from "react";
import View from "seed/examples/views/Home";

function Home() {
   const [isAuth, setIsAuth] = useState(false)
   useEffect(() => {
     if (localStorage.getItem("id") != null) { //Preload data from localStorage
       sessionStorage.setItem("token", localStorage.getItem("key"));
       sessionStorage.setItem("id", localStorage.getItem("id"));
     }
     if (sessionStorage.getItem("id") != null)
       setIsAuth(true);
     else window.location.replace("/examples/login");
   }, []);
  if (!isAuth) return null;
  return <View />;
}

Home.propTypes = {};

export default Home;