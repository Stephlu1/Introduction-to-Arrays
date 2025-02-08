//Lab 3: Introduction to Arrays

//Step 1: Declaring Arrays
let dogs = ["Husky", "Poodle", "Shepherd", "Borzoi", "Dalmation"]

//Step 2: Accessing Arrays
let firstDog = dogs[0];  
let lastDog = dogs[dogs.length - 1];  
let middleDog = dogs[Math.floor(dogs.length / 2)];

console.log("First Dog:", firstDog);
console.log("Middle Dog:", middleDog);
console.log("Last Dog:", lastDog);

//Step 3: Using Array Properties
let numberOfDogs = dogs.length;

console.log("Number of dogs in the array:", numberOfDogs);

//Step 4: Array Methods
dogs.push("Labrador");
console.log("After push:", dogs);

dogs.pop();
console.log("After pop:", dogs);

dogs.shift();
console.log("After shift:", dogs);

dogs.unshift("Poodle");
console.log("After unshift:", dogs);

dogs.splice(1, 1, "Chihuahua"); 
console.log("After splice:", dogs);

//Step 5: Iterating Through Arrays
console.log("Using forEach:");
dogs.forEach((dog) => console.log(dog));

//Step 6: Array Destructuring
let animals = ["Horse", "Cow", "Pig", "Goat", "Donkey"]
const [firstAnimal, secondAnimal, ...remainingAnimals] = animals;

console.log("First Animal:", firstAnimal);
console.log("Second Animal:", secondAnimal);
console.log("Remaining Animals:", remainingAnimals);