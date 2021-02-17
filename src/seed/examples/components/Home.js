import React, { useEffect } from "react";
import Render from "seed/examples/renders/Home";

function Home(props) {
  const { path } = props.match;
   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       return props.history.replace("/examples/login");
   });

  return <Render
    path={path}
  />;
}

export default Home;