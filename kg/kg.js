var age = prompt("Введите ваш возраст");
var x = prompt("Введите ваш рост в метрах");
var y = prompt("Введите ваш вес в кг");
var m = y/(x*x);
var groupNumber;
if(age >=18 && age <=25){
    groupNumber = 1;
} else if (age >=25 && age<=46){
    groupNumber = 2;
} else {
    groupNumber = 3;
}
if(groupNumber === 1 && m <= 17.5){
    alert("Ваш вес недостаточен, опасно для здоровья"); 
} else if (groupNumber === 1 && m >= 17.5 && m < 19.5){
    alert("Ваш вес слегка снижен, неопасно для здоровья");
} else if(groupNumber === 1 && m >= 19.5 && m < 23){
    alert("Ваш вес нормальный");
} else if(groupNumber === 1 && m >= 23 && m < 27){
    alert("Ваш вес излишний");
} else if(groupNumber === 1 && m >= 27.5 && m < 30){
    alert("Ожирение 1 степени");
} else if(groupNumber === 1 && m >= 30 && m < 35){
    alert("Ожирение 2 степени");
} else if(groupNumber === 1 && m >= 35 && m < 40){
    alert("Ожирение 3 степени");
} else if(groupNumber === 1 && m >= 40){
    alert("Ожирение 4 степени");
} else if(groupNumber === 2 && m <= 18){
    alert("Ваш вес недостаточен, опасно для здоровья"); 
} else if (groupNumber === 2 && m >= 18 && m < 20){
    alert("Ваш вес слегка снижен, неопасно для здоровья");
} else if(groupNumber === 2 && m >= 20 && m < 26){
    alert("Ваш вес нормальный");
} else if(groupNumber === 2 && m >= 26 && m < 28){
    alert("Ваш вес излишний");
} else if(groupNumber === 2 && m >= 28 && m < 31){
    alert("Ожирение 1 степени");
} else if(groupNumber === 2 && m >= 31 && m < 36){
    alert("Ожирение 2 степени");
} else if(groupNumber === 2 && m >= 36 && m < 41){
    alert("Ожирение 3 степени");
} else if(groupNumber === 2 && m >= 41){
    alert("Ожирение 4 степени");
} else if (groupNumber ===3) {
    alert("Нет данных для вашего возраста");
}