console.log("Holi");

// JavaScript + XML = JSX
var template = (
    <div>
        <h1>Indecision App!</h1>
        <p>This is some text</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);