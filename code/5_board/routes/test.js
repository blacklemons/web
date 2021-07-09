var moment = require('moment');
moment().format('YYYY-MM-DD');

console.log(moment().format("YYYY-MM-DD / hh:mm:ss"));

var time = moment().format("hh:mm");
console.log(time);