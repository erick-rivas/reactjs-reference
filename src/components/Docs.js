import React, { useEffect } from "react";

function Docs() {
    useEffect(() => {
        window.location.replace("/docs/tutorial-010-general.html");
    }, []);
  return <div />;
}
Docs.propTypes = {}

export default Docs;