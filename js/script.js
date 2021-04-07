let animal = prompt ("What is your pet's name?")
let happiness = 0;
let energy = 0;

for (let i=6; i>=1; i--){
    activity = prompt("feed, pet, or walk?")
        if (activity === "pet") {
            happiness++;
        } else if (activity === "feed") {
            energy += 2;
        } else if (activity === "walk" && energy > 0) {
            happiness += 2 && energy--;
        } else if (activity === "walk" && energy <= 0) {
            alert ("Not enough energy to enjoy a walk");
        }
}

console.log(animal + " has " + happiness +" happiness and " + energy + " energy.")