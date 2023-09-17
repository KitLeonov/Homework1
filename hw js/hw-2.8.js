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