//Basic react with basic es6
//+1 and -1 event using react
// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
//    // console.log('minusOne');
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
//    // console.log('reset');
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


//Using normal class based component system
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count',this.state.count);
        }
    }
    componentDidMount() {
        const json = localStorage.getItem('count');
        const count = parseInt(json, 10);
        if(!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }
    
    handleAddOne() {
        //this.setState is used to manipulate the state of object
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        // this.setState(() => {
        //     return {
        //         count: 0
        //     };
        // });

        this.setState({
            count: 0
        });

    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        ); 
    };  
}

Counter.defaultProps = {
    count: 0
};
ReactDOM.render(<Counter />, document.getElementById('app'));
