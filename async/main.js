function setAlarm(time, callback) {
	let timeToRing = time;

	return function(a) {
		if(timeToRing === a) {
			callback();
		} else {
			//console.log(`Сейчас ${a}, а будильник установлен на ${time}. Пока рано.`);
		}
	}
}

function setDailyRhythm(wakeUpTime, bedTime) {
	const goodMorning = () => console.log('Доброе утро, Вася!');
	const goodDreams = () => console.log('Спокойной ночи, Вася!');

	let wakeUp = setAlarm(wakeUpTime, goodMorning);
	let goToBed = setAlarm(bedTime, goodDreams);
	
	const getNow = () => {
		let now = new Date();
		let hours = now.getHours() > 9 ? now.getHours() : `0${now.getHours()}`;
		let minutes = now.getMinutes() > 9 ? now.getMinutes() : `0${now.getMinutes()}`;
		return `${hours}:${minutes}`;
	}

	function checkTime(currentTime) {
		let nowIs = currentTime();
		wakeUp(nowIs);
		goToBed(nowIs);
	}

	setInterval(checkTime, 1000, getNow);

}
