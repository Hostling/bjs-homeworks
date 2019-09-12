"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
	let d = b ** 2 - 4 * a * c;

	if(d < 0) {
		return [];
	} else if(d == 0) {
		return [-b/2*a];
	} else if(d > 0) {
		return [(-b + Math.sqrt(d))/2*a, (-b - Math.sqrt(d))/2*a];
	}
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
	let averageMark;
	if(marks.length > 5) {
   		console.log("Передано больше 5 оценок");
   		marks.splice(5);
   		let summ = 0;
   		for(let mark of marks) {
   			summ += mark;
   		}
   		averageMark= summ/marks.length;
	} else {
   		let summ = 0;
   		for(let mark of marks) {
   			summ += mark;
   		}
   		averageMark= summ/marks.length;
	}
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let now = new Date();
    let age = now - dateOfBirthday;
    age = Math.floor(age/1000/60/60/24/365);
    let result;
    if(age >= 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!”`;
    }
    console.log(result)
    return result;
}