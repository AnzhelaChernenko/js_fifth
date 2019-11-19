/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя
скорость), и следующие функции для работы с этим объектом:

let car = {
    "Manufacturer":"China",
    "Model":"Cherry",
    "Year of manufacture":2018,
    "Average Speed":90,
}

//Функция для вывода на экран информации об автомобиле;
function carInformation(){
    for (let information in car){
        document.write(`${information}:${car[information]}<br>`);
    }
}
carInformation();
//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней
// скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function speed() {
    let length = +prompt('Enter length','');
    let calcHours = length/car["Average Speed"];
    let hour = Math.floor(calcHours);
    let calcMin = length%car["Average Speed"];

   if(hour>=4){
       let calcTime = hour/4;
       let time = Math.floor(calcTime);
       document.write(`Time to cover the distance is ${hour+time}:${calcMin}`);
   }else {
       document.write(`Time to cover the distance is ${hour}:${calcMin}`);
   }
}

speed();*/

/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие
 функции для работы с этим объектом:


let shot = {
    numeratorA:10,
    numeratorB:40,
    denominatorA:2,
    denominatorB:2
}
//Функция сложения, вычитания,умножения,деления2-х объектов-дробей;
function calculation(){
    let calcAddition = shot.numeratorA/shot.denominatorA+shot.numeratorB/shot.denominatorB;
    document.write(`${shot.numeratorA}/${shot.denominatorA}+${shot.numeratorB}/${shot.denominatorB}=${String(calcAddition).substr(0,4)}<br>`);

    let calcSubtraction = shot.numeratorA/shot.denominatorA-shot.numeratorB/shot.denominatorB;
    document.write(`${shot.numeratorA}/${shot.denominatorA}-${shot.numeratorB}/${shot.denominatorB}=${String(calcSubtraction).substr(0,4)}<br>`);

    let calcMultiplication = shot.numeratorA/shot.denominatorA*shot.numeratorB/shot.denominatorB;
    document.write(`${shot.numeratorA}/${shot.denominatorA}*${shot.numeratorB}/${shot.denominatorB}=${String(calcMultiplication).substr(0,4)}<br>`);

    let calcDivision = shot.numeratorA/shot.denominatorA/shot.numeratorB/shot.denominatorB;
    document.write(`${shot.numeratorA}/${shot.denominatorA} / ${shot.numeratorB}/${shot.denominatorB}=${String(calcDivision).substr(0,4)}<br>`);

}
calculation();

//Функция сокращения объекта-дроби.
function beShot() {
    let num1 = parseInt(shot.numeratorA);
    let num2 = parseInt(shot.denominatorA);
    let delitel = 0, p, r;
    if (num1 < num2){
        p=num2; num2=num1; num1=p;
    }
    do {
        if (num1%num2==0){
            delitel=num2;
        }
        else {
            r=num2;
            num2=num1%num2;
            num1=r;
            delitel = num2;
        }
    }
    while (num1%num2!=0);
    let reductionA = shot.numeratorA/delitel;
    let reductionB = shot.denominatorA/delitel;
        if(delitel==1){
        document.write(`Для ${shot.numeratorA}/${shot.denominatorA} сокращение не возможно, т.к. НОД=${delitel}`);
    }else {
        document.write(`Сокращение для ${shot.numeratorA}/${shot.denominatorA} является ${reductionA}/${reductionB}`);
    }

}

beShot();*/

/*3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для
работы с этим объектом:
let time = {
    hour:+prompt('enter hour',''),
    minute:+prompt('enter minutes',''),
    seconds:+prompt('enter seconds','')
}
//Функция вывода времени на экран;
function seeTime(){
    document.write(`${time.hour}:${time.minute}:${time.seconds}<br>`);
}
seeTime();
//Функция изменения времени на переданное количество секунд;
function changeSeconds() {
    let newSecond = +prompt('enter seconds for changing','');
    let calcSec = time.seconds+newSecond;
    let calcFreeSec;
    let newMin;
    let endMin;

    if(time.seconds>newSecond && calcSec>60){
        newMin = Math.floor(time.seconds/newSecond);
        calcFreeSec= Math.floor(time.seconds%newSecond);
        endMin = time.minute+newMin;
        document.write(`${time.hour}:${endMin}:${calcFreeSec}<br>`)
    }  else if (time.seconds<newSecond && calcSec>60){
        newMin = Math.floor(newSecond/time.seconds);
        calcFreeSec= Math.floor(newSecond%time.seconds);
        endMin = time.minute+newMin;
        document.write(`${time.hour}:${endMin}:${calcFreeSec}<br>`)

    }else {
        document.write(`${time.hour}:${time.minute}:${calcSec}<br>`);
    }



}
changeSeconds();
//Функция изменения времени на переданное количество минут;
function changeMinutes() {
    let newMinutes = +prompt('enter minutes for changing','');
    let calcMin = time.minute+newMinutes;
    let calcFreeMin;
    let newHour;

    if(time.minute>newMinutes && calcMin>60){
        newHour = Math.floor(time.minute/newMinutes);
        calcFreeMin= Math.floor(time.minute%newMinutes);
        if(calcFreeMin<10){
            document.write(`${time.hour+newHour}:0${calcFreeMin}:${time.seconds}<br>`);
        }else {
            document.write(`${time.hour+newHour}:${calcFreeMin}:${time.seconds}<br>`);
        }}else if (time.minute<newMinutes && calcMin>60){
        newHour = Math.floor(newMinutes/time.minute);
        calcFreeMin= Math.floor(newMinutes%time.minute);
        if(calcFreeMin<10){
            document.write(`${time.hour+newHour}:0${calcFreeMin}:${time.seconds}<br>`);
        }else {
            document.write(`${time.hour+newHour}:${calcFreeMin}:${time.seconds}<br>`);
        }


        }else {
        document.write(`${time.hour}:${calcMin}:${time.minute}<br>`);
    }

}
changeMinutes();
//Функция изменения времени на переданное количество часов.
function changeHours() {
    let newHours = +prompt('enter hour for changing','');
    let calcH = time.hour+newHours;

    let newH;
if(calcH>24){
    newH= calcH%24;
    document.write(`${newH}:${time.minute}:${time.seconds}<br>`);
}else {
    document.write(`${calcH}:${time.minute}:${time.seconds}<br>`);
}


}
changeHours();*/



