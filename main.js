
function validate(){
const birth = document.getElementById("exampleInputCentury");

email.addEventListener("input", function (e) {
    if (century.validity.typeMismatch) {
      century.setCustomValidity("I am expecting  a year!");
    } else {
      century.setCustomValidity("");
    }
  });

}
validate();

