const button = document.querySelector("#calculate");
button.addEventListener("click", ()=> {
  calculateBMI();
});


let calculateBMI = ()=> {
  let weightTextField = document.querySelector("#weight");
  let heightTextfield = document.querySelector("#height");
  let weight = weightTextField.value;
  let height = heightTextfield.value;
  let bmi = Math.round(weight / (height * height));
  let results = document.querySelector("#final");


  if(bmi <= 0 || height==0|| weight==0){
    results.innerHTML =  "Error, please enter correct values";;
  }else if (bmi < 18.5) {
    results.innerHTML ="Your BMI is "+ bmi +", so you are underweight."
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    results.innerHTML = "Your BMI is "+ bmi +", so you have a normal weight."
  } else if (bmi >= 25 && bmi < 30) {
    results.innerHTML = "Your BMI is "+ bmi +", so you are overweight."
  } else if (bmi >= 30 && bmi <= 34.9) {
    results.innerHTML = "Your BMI is "+ bmi +", so you are Obese."
  }else if (bmi > 35) {
    results.innerHTML = "Your BMI is "+ bmi +", so you are extremely obese."
  }
}