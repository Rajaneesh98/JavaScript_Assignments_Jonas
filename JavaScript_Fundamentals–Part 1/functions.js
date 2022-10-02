function age1(birthyear){           // fuction declaration

    const age=2022-birthyear;
    return age;
}

const age2= function (birthyear) {    // function expression

    const age=2022-birthyear;
    return age;
}

const age3= birthyear => 2022-birthyear; // Arrow function

console.log(age1(1998))
console.log(age2(1998))
console.log(age3(1998))

const retirementage = (birthyear, name) =>{

    const age=2022-birthyear;
    const yearsLeft = 60 - age;
    return `${name} has ${yearsLeft} till retirement`;
}

console.log(retirementage(1998,"raj"))