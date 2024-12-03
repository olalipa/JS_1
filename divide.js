const numberToDivide = 3;
if (numberToDivide % 3 === 0 && numberToDivide % 5 !== 0) {
    console.log("Divisible by 3")
} else if (numberToDivide % 5 === 0 && numberToDivide % 3 !== 0) {
    console.log("Divisible by 5")
} else if (numberToDivide % 3 === 0 && numberToDivide % 5 === 0) {
    console.log("Divisible by 3 and 5")}
