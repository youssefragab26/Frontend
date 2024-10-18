// Writing Statements

// if
if (condition == true) {
    // Execute this code
}

// if else
if (condition == true) {
    // Execute this code
} else {
    // Execute this code
}

// Example
// Exam Result

var examResult = 53;
if (examResult >= 50) {
    console.log("Congratulations, you have passed the exam!");
} else {
    console.log("Sorry, you have failed the exam.");
}

// else 

if (condition == true) {
     // Execute this code
} else if (condition == true) {
     // Execute this code
} else if (condition == true) {
     // Execute this code
} else {
     // Execute this code
}

// Example

var food = "hot"
if (food == "hot") {
    console.log("Too hot");
} else if (food == "cold") {
    console.log("Too cold");
} else {
    console.log("Just right");
}

// Switch

switch (condition) {
    case 1:
        // Execute this code
        break;
    case 2:
        // Execute this code
        break;
    default:
        // Execute this code
        break;
}

// Example
// Medal Winner

var place = 'First';

switch (place) {
    case 'First':
        console.log('Gold Medal');
        break;
    case 'Second':
        console.log('Silver Medal');
        break;
    case 'Third':
        console.log('Bronze Medal');
        break;
    default:
        console.log('No Medal');
}