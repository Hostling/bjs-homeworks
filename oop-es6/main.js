class Weapon {
	constructor (options) {
		this.source = options;
		this.name = options.name;
		this.attack = options.attack;
		this.durability = options.durability;
		this.range = options.range;
	}

	takeDamage(damage) {
		if((this.durability - damage) <= 0)	{
			this.durability = 0;
		} else {
			this.durability -= damage;
		}
	}

	getDamage() {
		if(this.durability >= (this.source.durability * 0.3)) {
			return this.attack;
		} else if(this.durability <= (this.source.durability * 0.3) && this.durability != 0) {
			return this.attack / 2;
		} else {
			return 0;
		}
	}

	isBroken() {
		return this.durability === 0 ? true : false;
	}
}

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.source.durability); // 200?

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1 <=========Вот тут ошибка в задании в гите. Имелось в виду arm.getDamage() по всей логике, а написано bow.getDamage(). Кто-то неудачно скопипастил :)

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false <=========Вот тут такая же ошибка, что и выше.

//Создаем оружие из таблицы 1. Рука и лук уже есть, поэтому идем по таблице дальше.

const otherSword = new Weapon({
  name: 'Меч',
  attack: 10,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});

//Улучшенное оружие
const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: bow.source.durability,
  range: 4,
});

const swordOfTheThousandTruths = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: otherSword.source.range,
});

const staffOfTheStorm = new Weapon({
  name: 'Посох бури',
  attack: 10,
  durability: staff.source.durability,
  range: 3,
});

console.log(longBow);
console.log(swordOfTheThousandTruths);
console.log(staffOfTheStorm);


//-------------------------Задание 2-----------------------------------

class newBow extends Weapon {
	constructor() {
		super({
			name: 'Лук',
			attack: 10,
			durability: 200,
			range: 3,
		});
	}
}

class leftArm extends Weapon {
	constructor() {
		super({
			name: 'Рука',
			attack: 1,
			durability: Infinity,
			range: 1,
		});
	}
}

class newSword extends Weapon {
	constructor() {
		super({
			name: 'Меч',
			attack: 25,
			durability: 500,
			range: 1,
		});
	}
}

class newKnife extends Weapon {
	constructor() {
		super({
			name: 'Нож',
			attack: 5,
			durability: 300,
			range: 1,
		});
	}
}

class newStaff extends Weapon {
	constructor() {
		super({
			name: 'Посох',
			attack: 8,
			durability: 300,
			range: 2,
		});
	}
}

class newLongBow extends newBow {
	constructor() {
		super();
		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}

class newAxe extends newSword {
	constructor() {
		super();
		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
	}
}

class newStaffOfTheStorm extends newStaff {
	constructor() {
		super();
		this.name = 'Посох бури';
		this.attack = 10;
		this.range = 3;
	}
}


const bigAxe = new newAxe();
console.log(bigAxe.range); //Проверяем наследование улучшенного оружия

const bigStaffOfTheStorm = new newStaffOfTheStorm();
bigStaffOfTheStorm.takeDamage(295); //Ломаем посох почти до конца
console.log(bigStaffOfTheStorm.getDamage()); //Должно вернуться половина значения дамага, т.е. 5


//-------------------------------Задание 3-------------------------------------------

class StudentLog {
	constructor(name) {
		this.name = name;
		this.grades = {};
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject) {
		if(Number.isInteger(grade) && grade > 0 && grade < 6){
			if(typeof this.grades[subject] === 'undefined') {
				this.grades[subject] = [grade];
			} else {
				this.grades[subject].push(grade);
			}
		} else {
			let result = `Вы пытались поставить оценку ${grade} по предмету "${subject}". Допускаются только числа от 1 до 5`;
			if(typeof this.grades[subject] === 'undefined') {
				result += '\n0';
			} else {
				result += '\n' + this.grades[subject].length;
			}
			return result;
		}

		if(typeof this.grades[subject] === 'undefined') {
			return 0;
		} else {
			return this.grades[subject].length;
		}
	}

	getAverageBySubject(subject) {
		if(typeof this.grades[subject] === 'undefined'){
			return 0;
		} else {
			let sum = 0;
		    for(let mark of this.grades[subject]) {
		    	sum += Number(mark);
		    }
		    let avg = sum / this.grades[subject].length;

		    return avg;
		}
	}

	getTotalAverage() {
		let sum = 0;
		for(let grade in this.grades) {
			sum += Number(this.getAverageBySubject(grade));
		}
		let avg = sum / Object.keys(this.grades).length;
		return avg;
	}
}

