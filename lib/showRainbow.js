var pad = require('pad');
var colors = require('colors');

function rainbowOffset(string, offset) {
    offset = +offset;
    return colors.rainbow(pad(offset + string.length, string, '_')).slice(offset * 11);
}

function showRainbow(text, times, duration, cb) {
    var i = 0;
    times = Math.abs(+times);
    duration = Math.abs(+duration);
    var interval = setInterval(function() {
        process.stdout.write(rainbowOffset(text, i++) + "\r");
        if (i > times) {
            clearInterval(interval);
            process.stdout.write('\n');
            cb && cb();
        }
    }, duration / times);
}

module.exports = showRainbow;
