var showRainbow = require('./lib/showRainbow');
var flag = require('./lib/flag.json');
var _success = flag % 2 === 0;

function fail() {
    throw new Error('oh dear, oh dear...');
}

function success() {
    // I'm just passing by
}

showRainbow((_success ? 'GOOD' : 'BAD') + ' ' + flag, 10, 1000, _success ? success : fail);
