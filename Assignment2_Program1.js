//Program 1- Write a program to calculate the average of 5 numbers.
function avgOfFiveNumbers(num1, num2, num3, num4, num5) {

    let avg = 0;
    let sum = 0;
    sum = num1 + num2 + num3 + num4 + num5
    avg = sum / 5
    return (avg)
}

let num1 = 5,
    num2 = 5,
    num3 = 7,
    num4 = 9,
    num5 = 5
console.log("The average of given 5 numbers is :" + avgOfFiveNumbers(num1, num2, num3, num4, num5))