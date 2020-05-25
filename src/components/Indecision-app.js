import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Option from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
    //without constructor
    state = {
        options:[],
        selectedOption: undefined
    };
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
        //equal to line num 32 to 36
        // this.setState = (() => ({
        //     option: []
        // }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    handleAddOption = (option) => { 
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
    };

    //with constuctor
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //        // options: ['thing1', 'thing2','thing4']
    //        //options: []
    //        options: props.options
    //     };
    // }

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
            //console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        // const title = "Indecision";
        const subTitle = "Indecision";
       // const options = ['thing1', 'thing2','thing4'];
        return (
            <div>
                {/* title = {title} */}
                <Header subtitle = {subTitle}/>
                <div className='container'>
                    <Action 
                        handlePick = {this.handlePick} 
                        hasOptions = {this.state.options.length > 0} 
                    />
                    <div className='widget'>
                        <Option 
                            optionions = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}    
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}




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



//Challenge



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

export default IndecisionApp;

