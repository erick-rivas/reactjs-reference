import React, { useEffect, useState } from "react";
import View from "seed/examples/views/Home";

function Home(props) {
   const [isAuth, setIsAuth] = useState(false)
   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       window.location.replace("/examples/login");
     else setIsAuth(true);
   });
  if (!isAuth) return null;
  return <View />;
}

export default Home;