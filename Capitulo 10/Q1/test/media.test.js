const media = require("../media")

test("Calculadora de média de notas", function(){
    expect(media(8,8,8,8)).toBe(8);
})