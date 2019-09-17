"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    for(let i = 0; i < 4; i++) {
        if((typeof(arguments[i]) != "number" && typeof(Number(arguments[i])) != "number") || isNaN(Number(arguments[i]))){
            let argName;
            switch(i){
                case 0:
                    argName = 'percent'
                break;
                case 1:
                    argName = 'contribution'
                break;
                case 2:
                    argName = 'amount'
                break;
                case 3:
                    argName = 'date'
                break;
            }
            return `Параметр ${argName} содержит неправильное значение ${arguments[i]}`;
        }
    }
    
    percent = percent/100;
    let summ = Number(amount) - Number(contribution);
    let percentMonth = Number(percent) / 12 ;
    let payMonth = summ * (percentMonth + percentMonth/(((1 + percentMonth) ** Number(date)) - 1));
    let totalAmount = (payMonth * Number(date)).toFixed(2);
    console.log(totalAmount);

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    switch(name) {
        case null:
            name = 'Аноним';
        break;
        case undefined:
            name = 'Аноним';
        break;
        case "":
            name = 'Аноним';
        break;
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}