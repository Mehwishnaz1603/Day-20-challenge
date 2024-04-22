//🚀 Day 20 Challenge: Start Coding! 🚀//
//Question 58: Average Score Calculator: Write a simple program that can take lots of 
//scores and find their average.
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(69, 80, 70, 100)); // Shows the average score
//Question 59: Add a Special Number: Make a program that creates custom adders. These 
//adders can add a specific number to any other number you give them later.
function makeProgram(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeProgram(10);
console.log(addFive(20));
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user 
//that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Mehwish";
    var age = 25;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
