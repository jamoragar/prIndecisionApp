console.log("Holi");

// JavaScript + XML = JSX
var info = {
    title: 'Indecision App',
    subtittle: 'App for indecision'
};
var template = (
    <div>
        <h1>{info.title}</h1>
        <p>{info.subtittle}</p>
    </div>
);
var user = {
    name: 'Javier',
    age: 29,
    location: 'Hobart'
};

function getLocation(location){
    if(location){
        return location;
    }
    else{
        return 'Unknown';
    }
};

var template_two = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>Location: {getLocation(user.location)}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template_two, appRoot);