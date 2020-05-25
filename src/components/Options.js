import React from 'react';
import Options from './Option';

//Stateless component for option component
const Option = (props) => (
    <div>
        <div className='widget-header'>
        <h3 className='widget-header__title'>Your Option</h3>
        <button 
            className='button button--link'
            onClick={props.handleDeleteOptions}
            >Remove All
        </button>
        </div>
        {props.optionions.length === 0 && <p className='widget__message'>Please add option</p>}
        {
            props.optionions.map((optioning, index) => 
            <Options 
                key={optioning} 
                openText={optioning}
                count = {index + 1}
                handleDeleteOption = {props.handleDeleteOption}
            />
            )
        }
    </div>
);
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

export default Option;