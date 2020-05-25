import React from 'react';

//stateless component of action class component
const Action = (props) => (
    <div>
        <button 
        className='bigButton'
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >What should i do</button>
    </div>
);

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

export default Action;