const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

/* for (name of employees){
  
}

*/
function bonusCalc (employee) {
  let calculatedBonus = 0;

  // review rating
  if (employee.reviewRating <= 2) {
    calculatedBonus = 0;
  } else if (employee.reviewRating === 3) {
    calculatedBonus = 0.04;
  } else if (employee.reviewRating === 4) {
    calculatedBonus = 0.06;
  } else if (employee.reviewRating === 5) {
    calculatedBonus = 0.1;
  }

  // length of employee number
  if (employee.employeeNumber.length === 4) {
    calculatedBonus += 0.05;
  }

  // total salary
  if (employee.annualSalary >= 65000) {
    calculatedBonus -= 0.01;
  }

  // upper and lower limit
  if (calculatedBonus >= 0.13) {
    calculatedBonus = 0.13;
  } else if (calculatedBonus <= 0) {
    calculatedBonus = 0;
  }

  // return variable
  const returnEmployee = { 
    name: employee.name,
    bonusPercentage: calculatedBonus,
    totalBonus: (calculatedBonus * employee.annualSalary),
    totalCompensation: Number(employee.annualSalary) + 
                       Number((calculatedBonus * employee.annualSalary))
   };

  return returnEmployee;
}

console.log( employees );

console.log(bonusCalc(employees[0]));

