const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
let month = months[d.getMonth()];
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let time = h + " :" + m + ":" + s;
today = new Date(); 
gradday = new Date("May 25, 2024"); 
msPerDay = 24 * 60 * 60 * 1000 ; 
timeLeft = (gradday.getTime() - today.getTime()); 
e_daysLeft = timeLeft / msPerDay; 
daysLeft = Math.floor(e_daysLeft); 
document.write(daysLeft + " days left until the freedom!");
document.getElementById("year").innerHTML = "Year: " + d.getFullYear();
document.getElementById("day").innerHTML = "Today is: " + day;
document.getElementById("date").innerHTML = "Date: " + d.getDate();
document.getElementById("month").innerHTML = "Month: " + month;
document.getElementById("curtime").innerHTML = "Current time: " + time;
document.getElementById("name").innerHTML = "Iskander";
document.getElementById("group").innerHTML = "CS-2118";
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}





