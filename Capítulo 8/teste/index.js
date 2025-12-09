import convert from 'convert-units'
import * as math from 'mathjs'

const secondsToDay = math(convert(1000000).from('s').to('d'))
console.log(secondsToDay.toFixed(2));
module.exports = {};