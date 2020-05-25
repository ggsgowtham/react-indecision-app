console.log('app.js is running');

//jsx - javascript xml

//Rendering object in expression
const user = {
    name: 'Gowtham',
    age: 26,
    location: 'India'
};

function getLocation(location) {
    if(location) {
        return <p>location: { location }</p>;
    }
}

//Rendering string and numbers dynamically in expressions
// var userName = 'Gowtham GGS';
// var userAge = '26';
//  var userLocation = 'India';
// <p>Location: { getLocation(user.location) }</p> <p>Age: { user.age }</p>
        
const template2 = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1> 
        {(user.age && user.age >= 18) && <p>Age: { user.age }</p>}
        { getLocation(user.location) }
    </div>
);
const appRoot = document.getElementById('app');

//My Challenge code
const app = {
    title: 'Indecision App',
    subtitle: 'Example for practice',
    //options: ['One', 'Two']
    options: []
};


//form submit
const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log('Form submitted');
    //e.target is going to point to element that started
    //option is the name of input text of html tag
    //app.options saves the value it is a reusable method
    const option = e.target.elements.option.value;
    console.log(option);
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

};

const clearData = () => {
    //app.options called from onFormSubmit function
    app.options = [];
    render();
};

const onMakeDecision = () => {
    //creating random number
    //multiply by app.options.length gives random number when options
    //are not empty
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
    console.log(randomNumber);
}
// const template = (
//     <div>
//         <h1>{app.title}</h1> 
//         { app.subtitle && <p>{ app.subtitle }</p>}
//         <p>{ app.options.length > 0 ? 'Here are your options': 'No options' }</p>
//         <p>{ app.options.length }</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//         <form onSubmit = {onFormSubmit}>
//             <input type='text' name='option' />
//             <button >Add Option</button>
//         </form>
//     </div>
// );

//const numbers = [55,10,1000];

const render = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1> 
            { app.subtitle && <p>{ app.subtitle }</p>}
            <p>{ app.options.length > 0 ? 'Here are your options': 'No options' }</p>
    {/*<p>{ app.options.length }</p> */}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick = {clearData}>Clear</button>
            <ol>
                {
                    app.options.map((list) => {
                        return <li key= {list}>{list}</li>
                    })
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type='text' name='option' />
                <button >Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);  
};

render();
//challenge ends
//ReactDOM.render(template, appRoot);



