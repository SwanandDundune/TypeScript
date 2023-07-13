function calculateGrade() {
    var math = parseFloat(prompt("Enter Math marks:"));
    var physics = parseFloat(prompt("Enter Physics marks:"));
    var chem = parseFloat(prompt("Enter Chemistry marks:"));
    var sum = math + physics + chem;
    var average = sum / 3;
    var grade;
    if (average < 70) {
        grade = "C";
    }
    else if (average < 90) {
        grade = "B";
    }
    else {
        grade = "A";
    }
    console.log("Math Marks:", math);
    console.log("Physics Marks:", physics);
    console.log("Chemistry Marks:", chem);
    console.log("sum of marks", sum);
    console.log("Average Marks:", average);
}
calculateGrade();
