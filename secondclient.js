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


function bonusCalcV2(employee) {
    let baseBonus = 0;
    let rating = employee.reviewRating;
    let salary = Number(employee.annualSalary);
    let employeeNum = employee.employeeNumber;

    if (rating <= 2) {
        baseBonus === 0;
    } else if (rating === 3) {
        baseBonus = .04;
    } else if (rating === 4) {
        baseBonus = .06;
    } else if (rating === 5) {
        baseBonus = .1;
    }

    if (employeeNum.length === 4) {
        baseBonus += .05;
    }

    if (salary > 65000) {
        baseBonus -= .01;
    }

    //getting rid of the Extremes
    if (baseBonus >= .13) {
        baseBonus = .13;
    } else if (baseBonus <= 0) {
        baseBonus = 0;
    }
    // return variable
    
    const returnEmployee = {
        name: employee.name,
        bonusPercentage: baseBonus,
        totalBonus: (baseBonus * employee.annualSalary),
        totalCompensation: Number(employee.annualSalary) +
            Number(baseBonus * employee.annualSalary)
    };

    return returnEmployee;
}; //END bonusCalcV2


for (let i = 0; i < employees.length; i++) {
    console.log(bonusCalcV2(employees[i]));
}


// s/o pod 1