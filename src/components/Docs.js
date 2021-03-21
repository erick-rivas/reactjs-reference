import React, { useEffect } from "react";
import View from "views/Docs";

function Docs(props) {
    useEffect(() => {
        window.location.replace("/docs/tutorial-10_general.html");
    }, []);
  return <View />;
}

export default Docs;