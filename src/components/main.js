import React, { Component } from "react";
import "../styles/App.css";
import Posts from "./client/Posts";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default Main;
