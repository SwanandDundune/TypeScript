function calculateGrade(): void {
  const math: number = parseInt(prompt("Enter math marks:"));
  const physics: number = parseInt(prompt("Enter physics marks:"));
  const chem: number = parseInt(prompt("Enter chemistry marks:"));

  const sum: number = math + physics + chem;
  const average: number = sum / 3;


  let grade: string;

  if (average < 70) {
    grade = "C";
  } else if (average < 90) {
    grade = "B"
  } else {
    grade = "A";
  }

  console.log("Math Marks:", math);
  console.log("Physics Marks:", physics);
  console.log("Chemistry Marks:", chem);
  console.log("sum of marks",sum);
  
  console.log("Average Marks:", average);
}

calculateGrade();
