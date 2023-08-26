function calculateBMI() {

  const weight = parseFloat(document.getElementById("txt-weight").value);
  const heightCm = parseFloat(document.getElementById("txt-height").value);
  let heightM = heightCm / 100;

  let bmi = (weight / (heightM * heightM)).toFixed(2);

  document.getElementById("txt-bmi").innerHTML ="BMI: "+ bmi;

  if(bmi < 18.5) {
    document.getElementById("txt-remark").innerHTML = "Underweight";
    document.getElementById("text").innerHTML = "Tips : How to Decrease Your Body Mass Index (BMI)? fruits, vegetables and protein too. Above all, drink lots of water and make time for exercise at least 4 to 5 times a week. Consistently following these practices can help bring down your BMI."
    document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated";

  }
  else if(bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("txt-remark").innerHTML = "Normal (Healthy weight)";
    document.getElementById("text").innerHTML = "A BMI between 18.5 and 25 is considered normal, between 25 and 30 overweight, between 30 to 35 fat, and between 35 and 40 too fat."
    
    document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-success";
  }
  else if(bmi >= 25 && bmi <= 29.9) {
    document.getElementById("txt-remark").innerHTML = "Overweight";
    document.getElementById("text").innerHTML = "Tips : How to Decrease Your Body Mass Index (BMI)? fruits, vegetables and protein too. Above all, drink lots of water and make time for exercise at least 4 to 5 times a week. Consistently following these practices can help bring down your BMI."
    document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-warning";

  }
  else if(bmi >= 30) {
    document.getElementById("txt-remark").innerHTML = "Obese";
    document.getElementById("text").innerHTML = "If your BMI is 18.5 to <25, it falls within the healthy weight range. If your BMI is 25.0 to <30, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obesity range."

    document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
  }

} 

let result = document.getElementById("txt-bmi");
let remark = document.getElementById("progress-remark");
let tips = document.getElementById('text')
function resetBmi()
{
  let weight1 = document.getElementById("txt-weight");
  let height1 = document.getElementById("txt-height");
  let text1 = document.getElementById("abc");
 

  weight1.value ='';
  height1.value='';
  result.value ='';
  remark.value='';
  text1.innerHTML='';


  
  
      


}