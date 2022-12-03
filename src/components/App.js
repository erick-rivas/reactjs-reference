import React, { useEffect } from "react";
import View from "components/App.view";
import { initGA } from "seed/ga";

function App() {
  useEffect(() => { initGA(); });
  return <View />;
}
App.propTypes = {};

export default App;