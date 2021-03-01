


document.getElementById("btn").addEventListener("click",  function(e)

{
e.preventDefault()
 
 let date = document.getElementById("date").value; 
 let newResult = date;

 let d = new Date(newResult);
 let day = d.getDay()
 console.log(day)


    var genderMale = document.querySelector("#male").value;
    var genderFemale = document.querySelector("#female").value;
  
  if(genderMale == "male" || genderFemale =="female"){
    alert('Your Akan name is' +" "+ malesNames[day] + "\r\n" + "You were born on" + " " + malesDays[day])
  }
  else  {
  
   alert(femalesNames[day] + "\n " + "You were born on" + " " + femalesDays[day])
  }
  })

  

 const malesDays = [
      "Sunday",
      "Monday", 
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
  ];
  
  const malesNames =[
  "Kwasi", 
  "kwadwo",
  "kwabena",
  "kwaku",
  "yaw",
  "Kofi",
  "Kwame"
  ];
  const femalesNames = [
  "Sunday" ,
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ];
  
  const femalesDays = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "AKua",
    "Yaa",
    "Afua",
    "Ama"
  ];


  
  function validateForm() {
    var x = document.forms["myForm"]["date"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }