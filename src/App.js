import React from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/Route";

import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/:datetime?" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
