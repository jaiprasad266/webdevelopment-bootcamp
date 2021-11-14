function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);

    var interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you are over weight.";
    }
    return interpretation;
}

console.log(bmiCalculator(100,2));