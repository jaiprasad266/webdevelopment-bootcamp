function bmiCalculator(weight,height) {

    return weight/(height*height);
}

var bmi = bmiCalculator(65,1.8);
console.log("Your BMI is " + Math.round(bmi));