function compareArrays(arr1, arr2) {
	return !Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length ? false : arr1.every((current, index) => current === arr2[index]);
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true


function memoize(fn, limit) {
	const results = [];
	return function() {
		
		let solution = results.find(item => compareArrays(item.args, Array.from(arguments)));

		if(solution) {
			console.log('Результат работы функции найден в памяти');
			return solution.result;
		} else {
			console.log('Функция вызвана не из памяти');
			if(results.length === limit) {
				results.shift();
			}
			let ex = fn(...arguments);
			results.push({
				args: Array.from(arguments),
				result: ex,
			});

			return ex;
		}
	} 
}
const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); 

console.log(sum(3, 4)); // 7
console.log(mSum(3, 4)); // 7