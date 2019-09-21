function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let birthInMs = new Date(birthday);
    console.log(birthInMs);
    let age = now - birthInMs;
    console.log(age);
    age = Math.floor(age/1000/60/60/24/365);
    console.log(age);
    return age >= 18 ? true : false;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if(animal == undefined) {
    	return null;
    } else {
    	let sound = animal.sound;
    	return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for(let mark of marks) {
    	sum += Number(mark);
    }
    let roundedAverage = Math.round(sum / marks.length);

    return roundedAverage;
}