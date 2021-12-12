// Worker Threads
// Все файловые операции fs.*
// dns.lookup
// Pipes (некоторые случаи)
// CPU intense tasks
// по умолчанию их всего 4. Можн увеличить до 1024 (раньше было до 128)

// Системные асинхронные вызовы на уровне ядра
// TCP / UDP сервер и клиент
// Pipes
// DNS resolve
// Child process

const crypto = require('crypto');
const https = require('https')
const start = performance.now();

process.env.UV_THREADPOOL_SIZE = 8;

for(let i = 0; i < 50; i++) {
    crypto.pbkdf2('test', 'salt', 1000000, 64, 'sha512', () => {
        console.log(performance.now() - start);
    });
}

for(let i = 0; i < 50; i++) {
    https.get('https://yandex.ru', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(performance.now() - start);
        });
    });
}