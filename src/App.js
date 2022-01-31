import React, { Fragment } from "react";
import Main from "./Main";
import Navbar from "./Components/Navbar";

import "./style.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
    </Fragment>
  );
};
export default App;
