import React from 'react';

const Options = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.openText}</p>
        
        <button
            className='button button--link'
            onClick={() => {
                props.handleDeleteOption(props.openText);
            }}>
            Remove
        </button>
    </div>
);

// class Options extends React.Component {
//     render() {
//         return(
//             <div>
//                 {this.props.openText}
//             </div>
//         );
//     }
// }

export default Options;