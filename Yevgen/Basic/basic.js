// Object - Basic
//Ex 1
/*
Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 

Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.

The message from the methods must be printed on the browser too.
 */
// Car Object
var carObj_1 = {
    name: "",
    brand: "Bentley",
    model: "Continental GT V8", 
    color: "Black Velvet",
    weight: "3000",
    year: "2021",
    fullInfo: function(){
        return `Object 1 : ${this.brand} ${this.model} of the year ${this.year}`;
    }
}
document.getElementById("infoFromObj1").innerText = carObj_1.fullInfo();

var carObj_2 = {
    name: "",
    brand: "Aston Martin",
    model: "Vantage", 
    color: "Sand",
    weight: "1800",
    year: "2021",
    fullInfo: function(){
        return `Object 2: ${this.brand} ${this.model} of the year ${this.year}`;
    }
}
document.getElementById("infoFromObj2").innerText = carObj_2.fullInfo();

var carObj_3 = {
    name: "",
    brand: "Ferrari",
    model: "Roma", 
    color: "Black Velvet",
    weight: "1600",
    year: "2021",
    fullInfo: function(){
        return `Object 3: ${this.brand} ${this.model} of the year ${this.year}`;
    }
}
document.getElementById("infoFromObj3").innerText = carObj_3.fullInfo();
//
// Animal Objects
var animalObj_1 = {
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
document.getElementById("infoFromObj4").innerText = animalObj_1.fullInfo();

var animalObj_2 = {
    name: "Eagle",
    type: "Bird",
    origin: "Himalaya", 
    color: "Brown",
    weight: "65",
    year: "2019",
    fullInfo: function(){
        return `${this.name} is a big ${this.type} from ${this.origin} with ${this.weight} kg and is born in ${this.year} year`;
    }
}
document.getElementById("infoFromObj5").innerText = animalObj_2.fullInfo();

var animalObj_3 = {
    name: "Monkey",
    type: "simians",
    origin: "Afrika", 
    color: "Gray",
    weight: "30",
    year: "2020",
    fullInfo: function(){
        return `${this.name} is a big ${this.type} from ${this.origin} with ${this.weight} kg and is born in ${this.year} year`;
    }
}
document.getElementById("infoFromObj6").innerText = animalObj_3.fullInfo();

//
// Person Objects
var personObj_1 = {
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
document.getElementById("infoFromObj7").innerText = personObj_1.fullInfo();

var personObj_2 = {
    name: "Jeff",
    fam: "Miller",
    gender: "Men",
    origin: "USA", 
    education: "",
    weight: "110",
    year: "1982",
    fullInfo: function(){
        return `${this.name} ${this.fam} is a ${this.gender} from ${this.origin} with ${this.weight} kg and is born in ${this.year} year`;
    }
}
document.getElementById("infoFromObj8").innerText = personObj_2.fullInfo();

var personObj_3 = {
    name: "Hans",
    fam: "Jürgen",
    gender: "Men",
    origin: "Germany", 
    education: "",
    weight: "101",
    year: "1981",
    fullInfo: function(){
        return `${this.name} ${this.fam} is a ${this.gender} from ${this.origin} with ${this.weight} kg and is born in ${this.year} year`;
    }
}
document.getElementById("infoFromObj9").innerText = personObj_3.fullInfo();
