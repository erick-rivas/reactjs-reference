import React, { useEffect } from "react";
import View from "seed/examples/views/Home";

function Home(props) {
   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       window.location.replace("/examples/login");
   });
  return <View />;
}

export default Home;