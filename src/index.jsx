import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";

ReactDOM.render(
  <Quiz books={['The Lord of the Rings', 'The Iliad', 'The War and The Peace']}/>,
  document.getElementById("app")
);