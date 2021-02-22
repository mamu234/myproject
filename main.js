document.getElementById("btn").addEventListener("click",  function(e)

{
e.preventDefault()
 let year = document.getElementById("year").value;
 let month = document.getElementById("month").value;
 let date = document.getElementById("date").value; 
 let newResult = `${year},${month}, ${date}`;

 let d = new Date(newResult);
console.log(d.getDay());
})

const malesNames = [
    "Sunday:Kwasi",
    "Monday: kwadwo",
    "Tuesday:kwabena",
    "Wednesday:kwaku",
    "Thursday: yaw",
    "Friday:Kofi",
    "Saturday:Kwame",
];
const femalesNames = [
"Sunday: Akosua",
"Monday:Adwoa",
"Tuesday:Abenaa",
"Wednesday:AKua",
"Thursday:Yaa",
"Friday:Afua",
"Saturday:Ama",
];










