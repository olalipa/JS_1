const physicsGrade = 3;
const mathGrade = 5;
const englishGrade = 5;

let gradeAverage = (physicsGrade + englishGrade + mathGrade)/3;

console.log(gradeAverage);

if (gradeAverage >= 4) {
console.log('Good job!');
} else if (gradeAverage < 4) {
console.log('Try harder!');}
