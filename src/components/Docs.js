import React, { useEffect } from "react";
import View from "views/Docs";

function Docs(props) {
    useEffect(() => {
        window.location.replace("/docs/tutorial-010-general.html");
    }, []);
  return <View />;
}

export default Docs;