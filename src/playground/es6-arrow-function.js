const square = function(x) {
    return x * x;
}

//inside brackets is the arguments we pass
//we don't use function keyword in arrow functions


// const squareArrow = (x) => {
//     return x*x;
// };

//Example of arrow expression syntax
const squareArrow = (x) => x * x;
//console.log(squareArrow(9));

const getFirstname = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstname('Gowtham GGS'));

const getFirstame = (fullName) => fullName.split(' ')[0]; 
console.log(getFirstname('Gowtham GGS'));