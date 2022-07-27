let grades = [99, 98, 76, 54, 66, 90, 81];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
  console.log("i", i);
  console.log("grades", grades[i]);
  console.log("sum", sum);
}
let avg = sum / grades.length;