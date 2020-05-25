//Es6 concepts 
//ex: website to sell car 

class Person {

    //if exists print name or test
    //Method 1
    // constructor(name) {
    //     //if exists print name or test
    //     this.name = name || 'test';
    // }

    //Method 2
    constructor(name = 'test') {
        this.name = name;
    }
    getGreeting() {
        //Normal retun return this.name;

        //es6 return
        return `my name is ${ this.name }`;
    }
}

const me = new Person('Gowtham');
console.log(me.getGreeting());


//Es6 challenge

class Desc {
    constructor(name= 'Anonymous',age = 0) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `${ this.name } is ${ this.age } years old!`;
    }
}

class Student extends Person {
    constructor(name,age,major) {
        //super refers to parent class
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ' Their major is ${this.major}';
        }
    }
}

class Traveller extends Person {
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        
        if(this.homeLocation) {
            greeting += 'I am visiting from ${ this.homeLocation }';
        }
        
        return greeting;

    }
}

const travel = new Traveller('Gowtham',26,'India')
console.log(travel.getGreeting());

const det = new Student('Gowtham', 26, 'CSE');
console.log(det.getDescription()); 

const me = new Desc('Gowtham',26);
console.log(me.getDetails());
