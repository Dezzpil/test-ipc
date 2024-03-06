var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://api.shasta.trongrid.io/v1/assets/usdt/list',
    'headers': {
        'Content-Type': 'application/json'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});

/**
 * Джони, [06.03.2024 18:06]
 * Замысел такой:
 * 1. GET https://api.trongrid.io/v1/accounts/:address
 * 2. взять из данных data нужный asset и посмотреть его значение, если оно превышает значение фильтра, то сохраняем
 * проблема для меня составило то, что trongrid не предоставляет список аккаунтов, обращаться к ним можно только по адресам,
 * а адресов я не знаю и, возможно, их можно как-то генерировать, или где-то есть список, не знаю.
 * Cкачивать блокчейн локально я не стал, долго, и адресов я все равно не знаю
 */
