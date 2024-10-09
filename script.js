//                      DATE METHODS

// 1
// // Get the current date and time
// var currentDate = new Date();

// // Display the current date and time in the browser
// document.write(`Current Date and Time:  ${currentDate}`);


// // 2
// // Get the current date
// var currentDate = new Date();

// // Array of month names
// var monthNames = ["January", "February", "March", "April", "May", "June", 
//                   "July", "August", "September", "October", "November", "December"];

// // Get the current month index and retrieve the month name from the array
// var currentMonth = monthNames[currentDate.getMonth()];

// // Display the current month in an alert box
// alert("Current Month: " + currentMonth);


// // 3
// // Get the current date
// var currentDate = new Date();

// // Array of day names
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// // Get the current day index and retrieve the first 3 letters from the array
// var currentDay = dayNames[currentDate.getDay()];

// // Display the first 3 letters of the current day in an alert box
// alert("Today is: " + currentDay);



// // 4
// Get the current date
// var currentDate = new Date();

// // Get the current day index (0 for Sunday, 6 for Saturday)
// var currentDay = currentDate.getDay();

// // Check if the current day is Saturday (6) or Sunday (0)
// if (currentDay === 0 || currentDate === 6) {
//     alert("It’s Fun day");
// }
// console.log(currentDate);


// // 5
// // Get the current date
// var currentDate = new Date();

// // Get the current day of the month
// var currentDay = currentDate.getDate();

// // Check if the day is less than 16
// if (currentDay < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


// // 6
// // Create a new Date object representing the current date and time
// var currentDate = new Date();

// // Get the number of milliseconds since January 1, 1970
// var millisecondsSinceEpoch = currentDate.getTime();

// // Calculate the total minutes by converting milliseconds to minutes
// // 1 minute = 60,000 milliseconds
// var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000);

// // Assign the result to a new variable
// let totalMinutes = minutesSinceEpoch;

// console.log(totalMinutes);


// // 7
// // Create a new Date object representing the current date and time
// var currentDate = new Date();

// // Get the current hour (0-23)
// var currentHour = currentDate.getHours();

// // Check if it's before or after noon
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// // 8
// // Create a Date object for the last day of the last month of 2020
// var laterDate = new Date(2020, 11, 31); // December 31, 2020

// console.log(laterDate);


// // 9
// // Create a Date object for 1st Ramadan on June 18, 2015
// var ramadanStartDate = new Date(2015, 5, 18); // Month is 0-indexed (5 for June)

// // Get the current date
// var currentDate = new Date();

// // Calculate the difference in time
// var timeDifference = currentDate - ramadanStartDate;

// // Calculate the number of days past since 1st Ramadan
// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

// // Alert the number of days past
// alert(`Days past since 1st Ramadan: ${daysPast}`);


// // 10
// // Create a Date object for the reference date (1st Ramadan)
// var ramadanStartDate = new Date(2015, 5, 18); 

// // Create a Date object for the beginning of 2015
// var beginningOf2015 = new Date(2015, 0, 1); 

// // Calculate the difference in time (milliseconds)
// var timeDifference = ramadanStartDate - beginningOf2015;

// // Convert milliseconds to seconds
// var secondsElapsed = Math.floor(timeDifference / 1000); // 1000 milliseconds in a second

// // Display the result in the browser
// document.body.innerHTML = `<h1>Seconds elapsed between January 1, 2015, and June 18, 2015: ${secondsElapsed} seconds</h1>`;


// // 11
// // Create a Date object for the current date and time
// var currentDate = new Date();

// // Extract the hours
// var currentHours = currentDate.getHours();

// // Reset the date object an hour ahead
// currentDate.setHours(currentHours + 1);

// // Display the updated date object in the browser
// document.body.innerHTML = `<h1>Current Date and Time (1 hour ahead):</h1><p>${currentDate}</p>`;


// // // 12
// // // Create a Date object for the current date
// var currentDate = new Date();

// // Get the current year
// var currentYear = currentDate.getFullYear();

// // Reset the date to 100 years back
// currentDate.setFullYear(currentYear - 100);

// // Show the date in an alert box
// alert(`The date 100 years back is: ${currentDate.toDateString()}`);


// // 13
// // Ask the user for their age
// var age = prompt("Please enter your age:");

// // Get the current year
// var currentYear = new Date().getFullYear();

// // Calculate the birth year
// var birthYear = currentYear - age;

// // Display the birth year in the browser
// document.body.innerHTML = `<h1>Your birth year is: ${birthYear}</h1>`;



// // 14

// // K-Electric Bill Generation

// // Get the customer name (hardcoded or through a prompt)
// var customerName = prompt("Enter customer name:");

// // Get the current month using Date object
// var currentDate = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", 
//                     "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[currentDate.getMonth()];

// // Hardcoded values for units consumed, charges per unit, etc.
// var unitsConsumed = 450.76;  // units consumed
// var chargesPerUnit = 15.35;  // charges per unit in local currency
// var latePaymentSurcharge = 200;  // late payment surcharge

// // Calculations
// var netAmount = unitsConsumed * chargesPerUnit;
// var grossAmount = netAmount + latePaymentSurcharge;

// // Round amounts to two decimal places
// var roundedNetAmount = netAmount.toFixed(2);
// var roundedGrossAmount = grossAmount.toFixed(2);

// // Display the bill in the browser
// document.body.innerHTML = `
//     <h1>K-Electric Bill</h1>
//     <p><strong>Customer Name:</strong> ${customerName}</p>
//     <p><strong>Month:</strong> ${currentMonth}</p>
//     <p><strong>Number of Units:</strong> ${unitsConsumed.toFixed(2)}</p>
//     <p><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</p>
//     <p><strong>Net Amount Payable (within Due Date):</strong> ${roundedNetAmount}</p>
//     <p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>
//     <p><strong>Gross Amount Payable (after Due Date):</strong> ${roundedGrossAmount}</p>
// `;



//                  FUNCTIONS


// 1

// // Function to display the current date and time
// function displayCurrentDateTime() {
//     // Create a Date object for the current date and time
//     var currentDate = new Date();

//     // Get the date and time as a readable string
//     var dateTimeString = currentDate.toLocaleString();

//     // Display the date and time in the browser
//     document.body.innerHTML = `<h1>Current Date & Time:</h1><p>${dateTimeString}</p>`;
// }

// // Call the function to display the current date and time
// displayCurrentDateTime();



// 2

// // Function to greet the user with their full name
// function greetUser(firstName, lastName) {
//     // Combine first and last name to form the full name
//     const fullName = `${firstName} ${lastName}`;

//     // Display a greeting message in the browser
//     document.body.innerHTML = `<h1>Hello, ${fullName}!</h1><p>Welcome to our website.</p>`;
// }

// // Example usage - Prompt user for first and last name
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");

// // Call the function to greet the user
// greetUser(firstName, lastName);


// 3

// // Function to add two numbers and return the sum
// function addTwoNumbers() {
//     // Prompt the user to input two numbers
//     var num1 = +prompt("Enter the first number:");
//     var num2 = +prompt("Enter the second number:");

//     // Calculate the sum of the two numbers
//     var sum = num1 + num2;

//     // Return the sum
//     return sum;
// }

// // Call the function and display the result
// var result = addTwoNumbers();
// document.body.innerHTML = `<h1>The sum of the two numbers is: ${result}</h1>`;


// 4

// // Function to perform the desired operation
// function computeOperation(num1, num2, operator) {
//     let result;

//     // Check the operator and perform the corresponding operation
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 return "Error: Division by zero!";
//             }
//             break;
//         default:
//             return "Error: Invalid operator!";
//     }

//     // Return the computed result
//     return result;
// }

// // Example usage: Prompt user for input
// const num1 = +prompt("Enter the first number:");
// const num2 = +prompt("Enter the second number:");
// const operator = prompt("Enter the operator (+, -, *, /):");

// // Call the function and display the result in the browser
// const result = computeOperation(num1, num2, operator);
// document.body.innerHTML = `<h1>Result: ${result}</h1>`;


// 5

// // Function to square a number
// function squareNumber(num) {
//     return num * num;
// }

// // Example usage: Prompt the user for a number and display the squared result
// var number = +prompt("Enter a number to square:");
// var squaredResult = squareNumber(number);

// // Display the squared result in the browser
// document.body.innerHTML = `<h1>The square of ${number} is: ${squaredResult}</h1>`;


// 6

// debugger
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); 

// 7

// Function to display counting between start and end numbers
// function displayCounting(start, end) {
//     let countDisplay = document.getElementById("countDisplay");
//     countDisplay.innerHTML = ""; // Clear previous content

//     if (start > end) {
//         countDisplay.innerHTML = "Start number should be less than or equal to end number.";
//         return;
//     }

//     // Display the counting from start to end
//     for (let i = start; i <= end; i++) {
//         countDisplay.innerHTML += i + "<br>"; // Display each number
//     }
// }

// // Add event listener to the button to trigger the function
// document.getElementById("countButton").addEventListener("click", function() {
//     const start = parseInt(document.getElementById("start").value);
//     const end = parseInt(document.getElementById("end").value);
    
//     // Call the function to display the counting
//     displayCounting(start, end);
// });



// 8

// function calculateHypotenuse(base, perpendicular) {
//     // Inner function to calculate the square of a number
//     function calculateSquare(num) {
//         return num * num;
//     }

//     // Calculate the hypotenuse using the Pythagorean theorem
//     var hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular);
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     return hypotenuse;
// }

// // Example usage:
// var base = 3;
// var perpendicular = 4;
// var result = calculateHypotenuse(base, perpendicular);

// console.log("The hypotenuse is: " + result); 


// 9
// // i. Arguments as value
// function calculateArea(width, height) {
//     return width * height;
// }

// // Example usage (passing values directly):
// console.log("Area (values): " + calculateArea(5, 10)); // Output: 50

// // ii. Arguments as variables
// function calculateArea(width, height) {
//     return width * height;
// }

// // Example usage (passing variables):
// let width = 7;
// let height = 4;

// console.log("Area (variables): " + calculateArea(width, height)); // Output: 28

// 10
// function isPalindrome(str) {
//     // Convert the string to lowercase and remove non-alphanumeric characters
//     var cleanStr = str.toLowerCase();

//     // Reverse the cleaned string
//     var reversedStr = cleanStr.split('').reverse().join('');

//     // Check if the original cleaned string is the same as the reversed string
//     return cleanStr === reversedStr;
// }

// // Example usage:
// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 


// 11

// function capitalizeFirstLetter(str) {
//     // Split the string into an array of words
//     var words = str.split(" ");

//     // Map over each word and capitalize the first letter
//     var capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });

//     // Join the array of words back into a single string
//     return capitalizedWords.join(" ");
// }

// // Example usage:
// var exampleString = 'the quick brown fox';
// var result = capitalizeFirstLetter(exampleString);

// console.log(result); 


// 12
// function findLongestWord(str) {
//     // Split the string into an array of words
//     var words = str.split(" ");

//     // Use reduce to find the longest word
//     var longestWord = words.reduce(function(longest, currentWord) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");

//     return longestWord;
// }

// // Example usage:
// var exampleString = 'Web Development Tutorial';
// var result = findLongestWord(exampleString);

// console.log(result); 


// 13

// function countLetterOccurrences(str, letter) {
//     let count = 0;

//     // Loop through the string and check each character
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// var exampleString = 'JSResourceS.com';
// var letterToFind = 'o';
// var result = countLetterOccurrences(exampleString, letterToFind);

// console.log(`The letter '${letterToFind}' occurs ${result} time(s) in the string.`); 


// 14
// function calcCircumference(radius) {
//     // Calculate the circumference using the formula C = 2 * π * r
//     const circumference = 2 * Math.PI * radius;
    
//     // Output the result
//     console.log(`The circumference is ${circumference.toFixed(2)}`); // Rounded to 2 decimal places
// }

// function calcArea(radius) {
//     // Calculate the area using the formula A = π * r^2
//     const area = Math.PI * radius * radius;
    
//     // Output the result
//     console.log(`The area is ${area.toFixed(2)}`); // Rounded to 2 decimal places
// }

// // Example usage:
// var radius = 5;
// calcCircumference(radius);
// calcArea(radius);          
