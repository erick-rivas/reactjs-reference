import React, { useEffect } from "react";
import View from "seed/examples/views/Home";

function Home(props) {
  const { path } = props.match;
   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       return props.history.replace("/examples/login");
   });

  return <View
    path={path}
  />;
}

export default Home;