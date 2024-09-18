import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EventCreation from "./components/EventCreation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={EventCreation} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
