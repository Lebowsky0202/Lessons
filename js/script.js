'use strict'

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2600,
        };

        resolve(product);
    }, 2000);
});
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then((product) => {
    console.log(product);
    console.log('Данные получены.');
});