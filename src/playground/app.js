// const obj = {
//     name: 'Gowtham',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);
// console.log(getName());


//working with class based components
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
           // options: ['thing1', 'thing2','thing4']
           //options: []
           options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
            console.log('fetching data');

        } catch (e){

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        //console.log('saving data');
        if(prevState.options,length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
        //equal to line num 32 to 36
        // this.setState = (() => ({
        //     option: []
        // }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    handleAddOption(option) { 
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    render() {
        // const title = "Indecision";
        const subTitle = "Indecision";
       // const options = ['thing1', 'thing2','thing4'];
        return (
            <div>
                {/* title = {title} */}
                <Header subtitle = {subTitle}/>
                <Action 
                    handlePick = {this.handlePick} 
                    hasOptions = {this.state.options.length > 0} 
                />
                <Option 
                    optionions = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}    
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) =>  {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2>}
            <h2>Put your life in hands of computer</h2>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//                 <h2>Put your life in hands of computer</h2>
//             </div>
//         );
//     }
// }


//stateless component of action class component
const Action = (props) => {
    return(
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >What should i do</button>
        </div>
    );
}

//class based component of Action component
// class Action extends React.Component {
//     // handlePick() {
//     //     alert('button clicked!');
//     // }
//     render() {
//        return(
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >What should i do</button>
//             </div>
//         );
//     } 
// }

//Challenge

//Stateless component for option component
const Option = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.optionions.length === 0 && <p>Please add option</p>}
            {
                props.optionions.map((optioning) => 
                <Options 
                    key={optioning} 
                    openText={optioning}
                    handleDeleteOption = {props.handleDeleteOption}
                />
                )
            }
        </div>
    );
};
//Render new p tag  for each option (set text, set key)
//Adding removeall button
//class based component for Option Component
// class Option extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this); 
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.optionions);
//     // }
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove</button>
//                 {
//                     this.props.optionions.map((optioning) => <Options key={optioning} openText={optioning}/>)
//                 }
//             </div>
//         );
//     }
// }


const Options = (props) => {
    return(
        <div>
            {props.openText}
            <button onClick={() => {
                props.handleDeleteOption(props.openText);
            }}>
            Remove
            </button>
        </div>
    );
};

// class Options extends React.Component {
//     render() {
//         return(
//             <div>
//                 {this.props.openText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const text = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(text);

        // this.setState(() => {
        //     return {error};
        // });

        // if(text) {
        //     this.props.handleAddOption(text);
        // }
        this.setState(() => ({error}));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.handleAddOption}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}


//working with stateless components 
//props directly gets added as first argument in stateless component
// const User = (props) => {
     
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));