/*******************
 *  Variables and data types
 */

 

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

/*
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
*/

/***************
 * Boolean logic
 */

var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else { 
  console.log(firstName + ' is a man.');
}


/********************
 * The Ternary Operator and Switch Statements
 */

 var firstName = 'John';
 var age = 14;

 // Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

 
var drink = age >= 18 ? 'beer' : 'juice'; 
console.log(drink);


if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + 'drives an uber in lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' doing something else.');
}

age = 56;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + 'is a teenager.');
    break;
  case age >=20 && age < 30:
    console.log(firstName + 'is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}

var height;

height = 23;

/*
if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}
*/


// Equality operators
if (height === '23') {
  console.log('The ==== operator does type coercion!'); 
}

// Coding challange 2

var avgJohnTeam, avgMikeTeam;

avgJohnTeam = (10 + 10 + 10)/3;
avgMikeTeam = (20 + 0 + 10)/3;

console.log('Avegare John Team: ' + avgJohnTeam);
console.log('Avegare Mike Team: ' + avgMikeTeam);

if (avgJohnTeam > avgMikeTeam) {
  console.log('John Team have Win');
} else if (avgJohnTeam === avgMikeTeam){
  console.log('Draw');
} else {
  console.log('Mike Team Won');
}

/******************
 * Function
 */


function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

/******************
 * Function Statements and Expressions
 */

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Funtion expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon.';
    case 'designer':
      return firstName + ' designs beautiful websites.';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));


/******************
 * Arrays
 */

// Initialize new Array

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Marry';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr. ');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips [2]];

console.log(tips, finalValues);


/*********************
 * Object and Methods
 */



var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
}

john.calcAge();
console.log(john);



// Coding challange 4

/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  height: 181,
  weight: 130,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
  }
}

var mark = {
  firstName: 'Mark',
  lastName: 'Twait',
  height: 171,
  weight: 89,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
  }
}

john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
  console.log ('John have higher BMI than Mark, with details, ' + 'Name: ' + john.firstName + ' ' + john.lastName + ' BMI Score: ' + john.BMI);
} else if (john.BMI < mark.BMI) {
  console.log ('Mark have higher BMI than John, with details, ' + 'Name: ' + mark.firstName + ' ' + mark.lastName + ' BMI Score: ' + mark.BMI);
} else {
  console.log ('John and Mark have same BMI score');
}

/*

/***************
 * Loops and iteration
 */

/*
// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 1; i <= 20; i+= 2) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}
*/

// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/***************
 * Coding Challange 5
 */


var john = {
  firstName: 'john',
  bills: [124, 48, 268, 180, 42],
  calcTip: function () {
    this.tips = [];
    this.finalValues = [];

    for (i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = .20;
      } else if (bill >= 50 && bill <= 200) {
        percentage = .15;
      } else {
        percentage = .10;
      }

      // add result to arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;

    }
  }
}


var mark = {
  firstName: 'Mark',
  bills: [77, 475, 110, 45],
  calcTip: function () {
    this.tips = [];
    this.finalValues = [];

    for (i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // add result to arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;

    }
  }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do the calculation
john.calcTip();
mark.calcTip();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log('John Pay More');
} else if (john.average < mark.average) {
  console.log('Mark Pay More');
}