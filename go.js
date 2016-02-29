var showRainbow = require('./lib/showRainbow');
var text = require('./lib/text.json');

function fail() {
    throw new Error('oh dear, oh dear...');
}

showRainbow(text, 10, 1000, fail);
