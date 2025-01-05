// Instruction 
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//My Answer
function bmi(weight, height) {
    const ans = weight / height ** 2;
    return ans <= 18.5 ? "Underweight" :
           ans <= 25.0 ? "Normal" :
           ans <= 30.0 ? "Overweight" :
           "Obese";
  }