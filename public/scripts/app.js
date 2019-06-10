'use strict';

console.log("Holi");

// JavaScript + XML = JSX
var info = {
    title: 'Indecision App',
    subtittle: 'App for indecision'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        info.title
    ),
    React.createElement(
        'p',
        null,
        info.subtittle
    )
);
var user = {
    name: 'Javier',
    age: 29,
    location: 'Hobart'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
};

var template_two = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template_two, appRoot);
