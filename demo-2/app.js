const start = performance.now()
setTimeout(() => {
    console.log(performance.now() - start);
    console.log('Прошла секунда');
}, 1000)

function myFunc(arg) {
    console.log(performance.now() - start);
    console.log('Аргумент => ', arg);
}

setTimeout(myFunc, 1500, 'Я и есть аргумент');

const timerId = setTimeout(() => {
    console.log(performance.now() - start);
    console.log('BOOOM!');
}, 5000)

timerId.unref();
setImmediate(() => {
    timerId.ref();
})

setTimeout(() => {
    console.log(performance.now() - start);
    clearTimeout(timerId);
    console.log('Очищен BOOOM!')
}, 7000)

const intervalId = setInterval(() => {
    console.log(performance.now())
}, 1000)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Очищено!');
}, 5000)

console.log('Перед');

setImmediate(() => {
    console.log('После всего');
})
console.log('После');




