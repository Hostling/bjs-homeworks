function compareArrays(arr1, arr2) {
	if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return false;
	}
	if(arr1 >= arr2){
		return arr1.every((current, index) => current === arr2[index]);
	} else {
		return arr2.every((current, index) => current === arr1[index]);
	}
	
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true


function memoize(fn, limit) {
	const results = [];
	return function() {
		
		if(results.some(res => compareArrays(res.args, [arguments[0], arguments[1]]))){
			console.log('Результат работы функции найден памяти');
			return results.filter(elem => compareArrays(elem.args, [arguments[0], arguments[1]]))[0].result;
		} else {
			if(results.length === limit) {
				results.shift();
			}

			let ex = fn(arguments[0], arguments[1]);
			results.push({
					args: [arguments[0], arguments[1]],
					result: ex,
			});

			return ex;
		}
	} 
}
const sum = (a, b) => {
	console.log('Функция вызвана не из памяти');
	return a + b;
};

const mSum = memoize(sum, 2); 

console.log(sum(3, 4)); // 7
console.log(mSum(3, 4)); // 7