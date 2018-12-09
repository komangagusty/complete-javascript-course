/*******************
 *  Variables and data types
 */

 /*

 var firstName = 'John';
 console.log(firstName);

 var lastName = 'Smith';
 var age = 28;

 var fullAge = true;
 console.log(fullAge);

 var job;
 console.log(job);

 job = 'Teacher';
 console.log(job);

 // Variable naming rules
 var _3years = 3;
 var johnMark = "John and Mark";
 //var if = 23;

 */



 /****************
  * Variable mutation and type coercion
  */

/*

  var firstName = 'John';
  var age = 28;

  // Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What os his last Name?');
console.log(firstName + ' ' + lastName);

*/


/****************
 * Basic operators
 */

/*

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);

*/

/**************
 * Operator precendence
 */

/*

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignment
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 36
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

*/

/************
 * Code Challange 1
 */


/*
BMI = mass / height^2 = mass / (height * height).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

var markMass, johnMass, markHeight, johnHeight;

// 1
markMass = 130;
markHeight = 178;
johnMass = 85;
johnHeight = 180;

// 2
var markBmi, johnBmi;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi, johnBmi);    

// 3
var isMarkBmiHigher;
isMarkBmiHigher = markBmi > johnBmi;

// 4
console.log('is Mark BMI higher than John BMI? ' + isMarkBmiHigher);




