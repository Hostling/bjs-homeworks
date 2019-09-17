//Задание 1

function getSolutions(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let result = {};
	result.D = d;
	if(d == 0) {
		let x1 = -b/2*a;
		result.roots = [x1];
	} else if(d > 0) {
		let x1 = (-b + Math.sqrt(d))/(2 * a), x2 = (-b - Math.sqrt(d))/(2 * a);
		result.roots =  [x1, x2];
	}
	return result;
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if(result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.D == 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
	}
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//Задание 2

function getAverageScore(data) {
	function calculateAverage(arr) {
		let summ = 0;
		for(let mark of arr) {
			summ += mark;
		}
		return summ/arr.length;
	}
	
	let result = {};
	let avg = 0;
	for(let lesson in data) {
		let lessonAvg = calculateAverage(data[lesson])
		result[lesson] = lessonAvg;
		avg += lessonAvg;
	}

	result['average'] = avg / Object.keys(data).length;
	return result;
}

console.log(getAverageScore({
	alrebra: [2,4,5,2,3,4],
	geometry: [2,4,5],
	russian: [3,3,4,5],
	physics: [5,5],
	music: [2,2,6],
	english: [4,4,3],
	poetry: [5,3,4],
	chemistry: [2],
	french: [4,4]
}));

//Задание 3

function getPersonData(secretData) {
	function nameOfPirate(num) {
		let name = num == 1 ? 'Эмильо' : 'Родриго';
		return name;
	}

	let result = {};

	result.firstName = nameOfPirate(secretData.aaa);
	result.lastName = nameOfPirate(secretData.bbb);

	return result;
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));