//import {myLovelyNumber} from './mySharedThings';

// function test(){
//     alert(myLovelyNumber);
// }

// test();
var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];

var getAge = pet => {return new Date().getFullYear() - pet.bornOn}
alert(getAge(pets[2])); 
var petsWithAge = [];
pets.forEach((pet) => {
    pet.age = getAge(pet);
    petsWithAge.push(pet); 
})

console.log(petsWithAge);

var dogs = [];

pets.forEach((pet) => {
    if(pet.type === "dog"){
        dogs.push(pet);
    }
})

console.log(dogs);
var jasper;
pets.forEach((pet) => {
    if(pet.name === 'Jasper'){
        jasper = pet;
    }
});
//console.log(jasper.age);
console.log(`${"Japser is"} ${jasper.age} ${"years old"}`);