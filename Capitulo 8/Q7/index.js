import convert from "convert-units";

const bytes = convert(10).from("GB").to("B")
const tempo = convert(5).from('d').to('min'); 
console.log(tempo);
console.log(bytes);
module.exports = {};