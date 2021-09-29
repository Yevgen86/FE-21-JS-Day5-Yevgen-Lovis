// Classes - Basic
// Ex 1
/*
Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.

Create, using the classes, 3 different objects for each class.

The results from the methods must be printed on the browser too.
 */

/*   Car Class   */
class Car {
    brand;
    model; 
    color;
    power;
    year;

    constructor (brandPar, modelPar, colorPar, powerPar, yearPar) {
        this.brand = brandPar;
        this.model = modelPar;
        this.color = colorPar;
        this.power = powerPar;
        this.year = yearPar;
    }

    // Method
    entireData() {

        return `<div id="infoFromClass">${this.brand} ${this.model} of the year ${this.year} with ${this.power}</div>`;
    }
}

let car1 = new Car("Bentley", "Continental GT", "Black", "601PS", "2021");
let car2 = new Car("Aston Martin", "Vantage", "Sand", "511PS", "2020");
let car3 = new Car("Ferrari", "Roma", "Black Velvet", "741PS", "2021");

document.getElementById("infoFromObj1").innerHTML = car1.entireData();
document.getElementById("infoFromObj2").innerHTML = car2.entireData();
document.getElementById("infoFromObj3").innerHTML = car3.entireData();

/*   Animal Class   */
class Animal {
    name;
    type;
    origin; 
    color;
    weight;
    year;

    constructor (namePar, typePar, originPar,colorPar, weightPar, yearPar) {
        this.name = namePar;
        this.type = typePar;
        this.origin = originPar;
        this.color = colorPar;
        this.weight = weightPar;
        this.year = yearPar;
    }

    // Method
    entireData() {

        return `<div id="infoFromClass">${this.name} is a ${this.type} from ${this.origin} with ${this.weight} kg is born ${this.year} year</div>`;
    }
}

let animal1 = new Animal("Tiger", "Cat", "Asia", "Black", "300", "2021");
let animal2 = new Animal("Eagle", "Bird",  "Himalaya", "Brown", "65", "2020");
let animal3 = new Animal("Monkey", "simian", "Afrika", "Grey", "30", "2019");

document.getElementById("infoFromObj4").innerHTML = animal1.entireData();
document.getElementById("infoFromObj5").innerHTML = animal2.entireData();
document.getElementById("infoFromObj6").innerHTML = animal3.entireData();
/*

/*   Person Class   */
class Person {
    name;
    fam;
    gender;
    origin; 
    color;
    weight;
    year;

    constructor (namePar, famPar, genderPar, originPar, colorPar, weightPar, yearPar) {
        this.name = namePar;
        this.fam = famPar;
        this.gender = genderPar;
        this.origin = originPar;
        this.color = colorPar;
        this.weight = weightPar;
        this.year = yearPar;
    }

    // Method
    entireData() {

        return `<div id="infoFromClass">${this.name} is a ${this.gender} from ${this.origin} with ${this.weight} kg is born ${this.year} year</div>`;
    }
}

let person1 = new Person("Ivan", "Grozniy", "Men", "Russia", "", "92", "1986");
let person2 = new Person("Jeff", "Miller",  "Men", "USA", "", "110", "1982");
let person3 = new Person("Hans", "Jürgen", "Men", "Germany", "", "101", "1981");

document.getElementById("infoFromObj7").innerHTML = person1.entireData();
document.getElementById("infoFromObj8").innerHTML = person2.entireData();
document.getElementById("infoFromObj9").innerHTML = person3.entireData();