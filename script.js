// let stringi1 = "Rep";
// let number1 = "123455";
// alert(typeof +number1);
// alert(`music1`)


// let apple1 = "10";
// let apple2 = "3";

// alert(16 -((apple1) + Number(apple2) + 1));
// alert(apple1);
// alert(apple2);

// let year = prompt('В каком году было какое то событие?', "")

// if (year < 2015) {
//     alert('Рановато, надо сделать еще одну попытку')}
// else if (year > 2015) {alert('Подумайте еще, слишком поздно')}
// else { alert("В точку!") }

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '18');

// let rez = (age < 3) ? "Привет, малыш, тебе тут быть еще рановато":
// (age < 18) ? "Привет подрастрающему поколению" : 
// (age < 100) ? "Добро пожаловать на наш сайт" :
// "Почтение вашему поколению"

// alert(rez);
// let nazvanie = prompt("Официальное название языка JS?", '');
// let rezult = (nazvanie == "EcmaScript") ? alert("Верно"):
// alert("Неверно")

// let NumberLove = prompt("Введите свое любимое число:", "");
// let rezult = (NumberLove > 0) ? alert("1"):
// (NumberLove < 0) ? alert("-1"):
// alert("0")

// let result;
// let num1 = +prompt("Введите a", "")
// let num2 = +prompt("Введите b", "")
// result = (num1+num2 < 4) ? "Мало" : 
// (num1+num2 >4) ? "Много" :
// "Равно"
// alert(result)


// let login = prompt("Введите свой логин:", '')
// let message = (login == "Соотрудник") ? "Hello rab. class!":
// (login == "Директор" ) ? "Hello mr.Director!":
// (login == "") ? "Please enter your login!":
// '';
// alert(message)

// let DefaultUser = null;
// let NormalUser =  NaN; 
// let UserName = DefaultUser || NormalUser || "Unnamed";
// alert(UserName)

// let age = prompt("Введите свой возраст:", "")
// let rez = (!(age >= 14 && age <= 90)) ? "Человек среднего возраста":
// "Вы или слишком молодой, или слишком старый"
// alert(rez)

// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

// let pass = prompt('Пароль?', '');

// if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
// } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
// } else {
//     alert( 'Неверный пароль' );
// }

// } else if (userName == '' || userName == null) {
// alert( 'Отменено' );
// } else {
// alert( "Я вас не знаю" );
// }

// let var1= 0;
// while (true){
//     let var3 = prompt("Введите операцию для калькулятора : ", "")
//     let var2 = +prompt("Введите число : " + `(Промежуточный результат : ` + var1 + `)`,"")
//     if (!var2) break;
//     if (var3 == "+") {
//         var1 += var2 
//     } else if (var3 == "-") {
//         var1 -= var2
//     }
//     else if (var3 == "*")  {
//         var1 *= var2
//     }
//     else if (var3 == "/")  {
//         var1 /= var2}
// }
// alert(`Итоговый результат : ` + var1)

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на координатах (${i},${j})`, '');
//     if (!input) break outer;
//         }
//     }
// alert("Gotovo!")

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Правильно!');
//     break;

//   case 3: // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;

//   default:
//     alert('Результат выглядит странновато. Честно.');
// }

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt("Введите вш браузер : ");
// if (browser === "Edge" 
// || browser === "Chrome" 
// || browser === "Opera" 
// || browser === "Firefox" 
// || browser === "Safari") {
//     alert("Okay, you're good guys and you're using :" + browser)
//     }
//     else {alert('Not good boys! Repeat!')
// }

function showMessage() {
    let message = prompt("You're name : ", "Calvin Cleine");

    alert( message );
}

showMessage();