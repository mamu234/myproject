document.getElementById("btn").addEventListener("click",  function(e)

{
e.preventDefault()
 let year = document.getElementById("year").value;
 let month = document.getElementById("month").value;
 let date = document.getElementById("date").value; 
 let newResult = `${year},${month}, ${date}`;

 let d = new Date(newResult);
 let day = d.getDay()
 console.log(day)


    var genderMale = document.querySelector("#male").value;
    var genderFemale = document.querySelector("#female").value;
  
  

    
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
  if(genderMale == "male" || genderFemale =="female"){
    alert('Your Akan name is' +" "+ malesNames[day] + "\ " + "You were born on" + " " + malesDays[day])
  }
  else  {
  
   alert(femalesNames[day] + "\ " + "You were born on" + " " + femalesDays[day])
  }
  })
  
  

