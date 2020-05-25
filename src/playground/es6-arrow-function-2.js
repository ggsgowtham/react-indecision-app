// const add = function(a, b) {
//     return a+b;
// }

// console.log(add(55,11,1000));  //this is still accessible without having an argument


// const add = (a, b) => {
//     //console.log(arguments);
//     return a + b;
// }

// console.log(add(55,15,1001));  //this is still accessible without having an argument

const user = {
    name: 'Gowtham',
    cities: ['Hyderabad','Chennai','Bangalore'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach ((city) => {
        //     console.log(this.name + ' lived in ' + city);
        // });

        return this.cities.map((city) => this.name + ' lived in '+ city);

    }
};

console.log(user.printPlacesLived());


//My challenge area
const multiplier = {
    number: ['10','1','2','4'],
    multiplyBy: 3,
    Multiply() {
        console.log(this.number);
        return this.number.map((numb) => numb * this.multiplyBy);
    }
};

console.log(multiplier.Multiply());