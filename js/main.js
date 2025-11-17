// Animal Constructors
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.speak = function() {
        return this.name + " says Meow";
    };
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.speak = function() {
            return this.name + " says Woof";
        } 
    };


    

// Array to store animals
let animals = [];
// Create Animal Function
function newAnimal() {
    let name = document.getElementById("name").value;
    let breed = document.getElementById("breed").value;
    let weight = parseInt(document.getElementById("weight").value);
    let type = document.getElementById("type").value;

    if (!name || !breed || isNaN(weight)) {
        alert("Please fill in all fields.");
        return;
    }

    let newAnimal;
    if (type === "Dog") {
        newAnimal = new Dog(name, breed, weight);
    } else {
        newAnimal = new Cat(name, breed, weight);
    }

    animals.push(newAnimal);

    document.getElementById("animalDisplay").innerHTML += `<br>${type}: ${name}, Breed: ${breed}, Weight: ${weight}`;
}



// Speak Function
function makeSpeak() {
    let speakName = document.getElementById("speakName").value;
    let found = animals.find(a => a.name.toLowerCase() === speakName.toLowerCase());
    
    if (found) {
        document.getElementById("speakDisplay").innerHTML += `<br>${found.speak()}`;
    } else {
        document.getElementById("speakDisplay").innerHTML += `<br>No animal found with name ${speakName}`;
    }
}

// Preview image for selected type
function updateTypeImage() {
    let type = document.getElementById("type").value;
    let img = document.getElementById("typeImage");
    if (!img) return;
    img.referrerPolicy = 'no-referrer';
    if (type === "Dog") {
        img.src = "https://place.dog/240/160?r=" + Math.floor(Math.random()*10000);
        img.alt = "Dog preview";
    } else {
        img.src = "https://cataas.com/cat?width=240&height=160&rand=" + Math.floor(Math.random()*10000);
        img.alt = "Cat preview";
    }
}

// Initialize preview on load and on change
document.addEventListener("DOMContentLoaded", function(){
    let sel = document.getElementById("type");
    if (sel) {
        sel.addEventListener("change", updateTypeImage);
        updateTypeImage();
    }
});