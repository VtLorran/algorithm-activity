const Cadastro = require("../index")

test("Cadastro de pessoa", function() {
    const p1 = new Cadastro("Vítor")
    expect(p1.nome).toBe("Vítor")
})

