const idade = require("../idade")

test("Verificador de acesso por idade. Insira sua idade:", function(){
    expect(idade(17)).toBe("Menor de idade")
})

test("Verificador de acesso por idade. Insira sua idade:", function(){
    expect(idade(18)).toBe("Maior de idade")
})