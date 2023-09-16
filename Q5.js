function assignGrade(score) {
    if (score >= 80 && score <= 100) {
      return "A";
    } else if (score >= 70 && score < 80) {
      return "B";
    } else if (score >= 60 && score < 70) {
      return "C";
    } else if (score >= 50 && score < 60) {
      return "D";
    } else if (score >= 0 && score < 50) {
      return "F";
    } else {
      return "Invalid score";
    }
  }
  
  console.log(assignGrade(85)); // A
  console.log(assignGrade(72)); // B
  console.log(assignGrade(62)); // C
  console.log(assignGrade(55)); // D
  console.log(assignGrade(30)); // F
  