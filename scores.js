const studentScore = 87;
let studentGrade;
if (studentScore >= 90 && studentScore <= 100) {
    studentGrade = "A";
} else if (studentScore <= 89 && studentScore >= 85) {
    studentGrade = "B";
} else if (studentScore <=84 && studentScore >= 80) {
    studentGrade = "C";
} else if (studentScore <= 79 && studentScore >= 75) {
    studentGrade = "D";
} else if (studentScore <= 74 && studentScore >= 61) {
    studentGrade = "E";
} else if (studentScore <= 60 && studentScore > 0) {
    studentGrade = "F";}
console.log(studentGrade);