// //Challenge to create hide and toggle using jsx in react
// let visibility = false;

// const showHideDetails = () => {
//     // !visibility is going to flip value if true to false and vice versa
//     visibility = !visibility;
//     render();

// };

// const render = () => {
    // const jsx = (
    //     <div>
    //         <h1>Visibility Toggle</h1>
    //         <button onClick={showHideDetails}>
    //             {visibility ? 'Hide Details': 'Show Details'}
    //         </button>
    //         { visibility && (  
    //                 <div>
    //                     <p>This is the challenge</p>
    //                 </div>
    //             )
    //         } 
    //     </div>
    // );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };
// render();


//Visibility using class component
class VisiblibiityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.showHideDetails = this.showHideDetails.bind(this);
        this.state = {
            visibility: false
        };
    }

    showHideDetails() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showHideDetails}>
                    {this.state.visibility ? 'Hide Details': 'Show Details'}
                </button>
                { this.state.visibility && (  
                        <div>
                            <p>This is the challenge</p>
                        </div>
                    )
                } 
            </div>
        );
    }
}

ReactDOM.render(<VisiblibiityToggle />,document.getElementById('app'));