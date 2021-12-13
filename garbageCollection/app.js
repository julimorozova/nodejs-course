// Garbage collection

// автоматическая задача, которая проверяет состояние javascript
// и помечает не нужные блоки для очистки

const getData = () => {
    return {a: 1};
}

main = () => {
    let ref1 = getData(); //1 ref
    let ref2 = { ref1 }; // 2 ref
    ref1 = undefined;   // 1 ref
    ref2.ref1 = undefined; // 0 ref
}

main();

// нельзя очищать - круговая зависимость
// алгоритм mark-sweep
// tri-color mark - более продвинутый алгорим - красим в 3 цвета (белый, серый и черный)
// мы имеем промежуточное состояние, которое можно сохранить

// проблема помяти - фрагментация
// алгоритм stop and copy