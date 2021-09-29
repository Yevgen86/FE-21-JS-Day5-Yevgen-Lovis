// Object - Basic
//Ex 1
/*
Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

The message from the methods must be printed on the browser too.
 */

var carObj = {
    name: "",
    brand: "Bentley",
    model: "Continental GT V8", 
    color: "Black Velvet",
    weight: "3000",
    year: "2021",
    fullInfo: function(){
        return `${this.brand} ${this.model} of the ${this.year}`;
    }
}
document.getElementById("infoFromObj1").innerText = carObj.fullInfo();

var animalObj = {
    name: "Tiger",
    type: "Cat",
    origin: "Asia", 
    color: "Black & orange",
    weight: "300",
    year: "2018",
    fullInfo: function(){
        return `${this.name} is a big ${this.type} from ${this.origin} with ${this.weight} kg and is born in ${this.year} year`;
    }
}
document.getElementById("infoFromObj2").innerText = animalObj.fullInfo();

var personObj = {
    name: "Ivan",
    fam: "Grozniy",
    gender: "Men",
    origin: "Russia", 
    education: "",
    weight: "92",
    year: "1986",
    fullInfo: function(){
        return `${this.name} ${this.fam} is a ${this.gender} from ${this.origin} with ${this.weight} kg and is born in ${this.year} year`;
    }
}
document.getElementById("infoFromObj3").innerText = personObj.fullInfo();
