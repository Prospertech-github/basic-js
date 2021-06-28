// Coding challenge 1
// BMI Calculator

var markWeight = 78; //kg
var markHeight = 1.69; //metres

var johnWeight = 92; //kg
var johnHeight = 1.95; //metres

var markBMI, johnBMI;
markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

var checkBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI greater than John\'s BMI?' + ' ' + checkBMI);



// Switch statement
var firstName = 'Joseph';
var job = 'Teacher';

switch (job) {
  case 'Teacher':
    console.log(firstName + ' teaches young people well.');
    break;
  case 'Designer':
    console.log(firstName + ' creates beautiful images');
    break;
  case 'Politcian':
    console.log(firstName + ' is not a corrupt statesman');
    break;
  default: 
    console.log(firstName + ' is unemployed!!')
}


// Ternary Operator
var age = 18;

var drink = age >= 18 ? drink = 'beer and alcohol' : drink = 'juice';

console.log(firstName + ' is ' + age + ' and drinks ' + drink + '.');


// CODING CHALLENGE 2
var mikeTeamTotal, johnTeamTotal, averageTeamJohn, averageTeamMike;
mikeTeamTotal = 116 + 94 + 123;
johnTeamTotal = 89 + 120 + 103;

averageTeamJohn = johnTeamTotal / 3;
averageTeamMike = mikeTeamTotal / 3;

console.log(averageTeamMike, averageTeamJohn);

if (averageTeamJohn > averageTeamMike) {
  console.log('John\'s team emerged winners.');
} else {
  console.log('Mike\'s team emerged winners.');
}

var maryTeamTotal, averageTeamMary;
maryTeamTotal = 97 + 134 + 105;
averageTeamMary = maryTeamTotal / 3;

if (averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMary){
  console.log('Team John are the best.');
} else if(averageTeamMike > averageTeamJohn && averageTeamMike > averageTeamMary){
  console.log('Team Mike are victorious.');
} else if(averageTeamMary > averageTeamJohn && averageTeamMary > averageTeamMike){
  console.log('Team Mary are victorious');
} else {
  console.log('There\'s a stalemate');
}


var firstName = 'Prosper'
function calculateAge(birthYear) {
  return 2020 - birthYear;
}
var myAge = calculateAge(1999);
console.log(myAge);

// Retirement Function (Function Declaration)
function calculateRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirementTime = 70 - age;

  console.log(firstName + ' will retire in ' + retirementTime + ' years time.');
}

calculateRetirement(1999, 'Prosper');

// Function expression
var whatYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.'
    case 'driver':
      return firstName + ' drives you with fun.'
    case 'designer':
      return firstName + ' creates beautiful images.'
    default:
      return firstName + ' doesn\'t have a specified job.'
  }
}
console.log(whatYouDo('teacher', 'Prosper'))

// Javascript statements do not produce an immediate result e.g if else statement, why loop etc
// javascript expressions produce results e.g functions, typeof, arithmetic operations

var bio = ['Prosper', 'Ikechukwu', 1999, 'Frontend Developer'];
console.log(bio);

bio.push('blue');
bio.unshift('Mr');
console.log(bio); 

bio.pop();
bio.shift();
console.log(bio);


// TIP CALCULATOR

// var bills = [124, 48, 268];

// function tipCalculator(bill) {
//   var tip;

//   if (bill < 50) {
//     return tip = bill * (20/100);  
//   } else if (bill >= 50 && bill <= 200) {
//     return tip = bill * (15 / 100);
//   } else {
//     return tip = bill * (10 / 100);
//   }

// }

// var tips = [];
// tips.push(tipCalculator(124));
// tips.push(tipCalculator(48));
// tips.push(tipCalculator(268));

// console.log(tips);

// var finalAmount = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(finalAmount);

// ORRRR
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2
  } else if (bill >= 50 && bill < 200) {
    percentage = .15
  } else {
    percentage = .1
  }
  return percentage * bill;
}

var bills = new Array(124, 48, 268);
console.log(bills);

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
console.log(tips);

var finalAmount = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
console.log(finalAmount);

// Objects using Object Literals
/* var bioData = {
  firstName: 'Prosper',
  lastname: 'Ikechukwu',
  birthYear: 1999,
  siblings: ['Noble Ikechukwu', 'Rejoice Ikechukwu'],
  isMarried: 'Single'
}; 

console.log(bioData);
console.log(bioData.siblings);
console.log(bioData['isMarried']);

bioData.occupation = ' Frontend web Developer';
console.log(bioData);  */

// Object using new object syntax
var jobs = new Object();
jobs.firstJob = 'Laundry Man';
jobs.secondJob = 'Social media manager';
jobs.thirdJob = 'Writer';
jobs.fourthJob = 'Frontend Intern';

console.log(jobs);

var bioData = {
  firstName: 'Prosper',
  lastName: 'Ikechukwu',
  birthYear: 1999,
  siblings: ['Noble Ikechukwu', 'Rejoice Ikechukwu'],
  isMarried: 'Single',
  calcAge: function() {
    this.age = 2020 - this.birthYear;
  }
}; 

bioData.calcAge();
console.log(bioData);

// CODING CHALLENGE 4
var johnData = {
  firstName: 'John',
  lastName: 'Smith',
  height: 1.95, //metres
  mass: 92, //kg
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    
    return this.BMI;
  }
}

var markData = {
  firstName: 'Mark',
  lastName: 'Miller',
  height: 1.69, //metres
  mass: 78, //kg
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);

    return this.BMI;
  }
}

johnData.calcBMI();
markData.calcBMI();
console.log(johnData, markData);

johnData.calcBMI() > markData.calcBMI() ? console.log('John has the highest BMI of ' + johnData.BMI) : console.log('Mark has the highest BMI of ' + markData.BMI);

// Iterations
for (var i = 0; i <= 20; i++){
  console.log(i);
}

var bio = ['Prosper', 'Ikechukwu', 1999, 'Frontend Developer'];
for (var i = 0; i < bio.length; i++){
  console.log(bio[i]);
}
// looping backwards
for (var i = bio.length - 1; i >= 0; i--){
  console.log(bio[i]);
}

// looping using while loop 
var i = 0;
while (i < bio.length) {
  console.log(bio[i]);
  i++;
}

// Continue & break statements
// continue statements stops the current iteration but continues the loop
// break statements end the iteration and exits the loop totally

// Continue statement
for (i = 0; i < bio.length; i++){
  if (typeof bio[i] !== 'string') continue;
  console.log(bio[i]);
}

// Break statement
for (i = 0; i < bio.length; i++){
  if (typeof bio[i] !== 'string') break;
  console.log(bio[i]);
}

// CODING CHALLENGE 5
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTip: function () {
    this.tips = [];
    this.finalValues = [];
      for (i = 0; i < this.bills.length; i++){
        var percentage;
        var bill = this.bills[i];

        if (bill < 50) {
          percentage = .2;
        } else if (bill >= 50 && bill <= 200) {
          percentage = .15;
        } else {
          percentage = .1;
        }

        // Add results to the coressponding arrays
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + (bill * percentage);
      }
  }
}


var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTip: function () {
    this.tips = [];
    this.finalValues = [];
      for (i = 0; i < this.bills.length; i++){
        var percentage;
        var bill = this.bills[i];

        if (bill < 100) {
          percentage = .2;
        } else if (bill >= 100 && bill <= 300) {
          percentage = .1;
        } else {
          percentage = .25;
        }

        // Add results to the coressponding arrays
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + (bill * percentage);
      }
  }
}

john.calcTip();
mark.calcTip();

function calcAverage(tips) {
  var sum = 0;
  for (i = 0; i < tips.length; i++){
    sum += tips[i];
  }
  return sum / tips.length; 
}

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  alert('John won the contest');
} else {
  alert('Mark is victorious');
}