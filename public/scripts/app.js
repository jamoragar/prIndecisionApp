"use strict";

console.log("Holi");

// JavaScript + XML = JSX
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App!"
    ),
    React.createElement(
        "p",
        null,
        "This is some text"
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
