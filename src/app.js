// import validator from 'validator';
import  React  from 'react';
import  ReactDOM from 'react-dom';
import IndecisionApp from './components/Indecision-app';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name="GGS";
//     }
// }
// const OldSyntax = new OldSyntax();
// console.log(OldSyntax);


// class NewSyntax {
//     name = 'GGS';
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);



// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.content}
//             <p>footer</p>
//         </div>
//     )
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// )
