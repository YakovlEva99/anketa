var login = prompt("Введите логин");
var password = prompt("Введите пароль");
switch(true){
    case login == "Иван" && password == "2222" :
        alert("Добро пожаловать" + " " + login);
        break;
    case login == "Артем" && password == "2323" :
        alert("Добро пожаловать" + " " + login);
        break;
    case login == "Семен" && password == "5555" :
        alert("Добро пожаловать" + " " + login);
        break;
        default :
        alert("Ваш пароль или логин неправильны");
        break;
}