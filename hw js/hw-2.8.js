//exersice 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(function
    (a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else return 0;
}))

//exersice 2

function isPositive(num) {
    if (num >= 0) {
        return num;
    }
}

function isMale(obj) {
    if (obj.gender === 'male') {
        return obj;
    }
}

function filter(arr, ruleFunction) {
    const newArr = [];

    for (let i of arr) {
        if (ruleFunction(i) !== underfined) {
            newArr.push(i)
        }
    }

    return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peoples, isMale));

//exersice 3

const timer = (deadline) => {
    const inetval =
        setInterval(() => {
            let nowDateTime = new
                Date();
            console.log(nowDateTime);
        }, 3000)

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, deadline * 1000)
};

timer(30);

//exersice 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})


//exersice 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');

        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}`);
}

delayForSecond(() => { return sayHi('Глеб') });