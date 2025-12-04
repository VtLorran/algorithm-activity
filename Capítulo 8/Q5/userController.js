const users = require('./userDB');

console.log(users.usuarios[1].nome);
console.log(users.usuarios[1].email);
console.log(users.usuarios[1].senha + '\n');

users.usuarios[1].renomear('Cristiano');
users.usuarios[1].alterarSenha(242526);
users.usuarios[1].alterarEmail('cristiano@gmail.com')

console.log(users.usuarios[1].nome)
console.log(users.usuarios[1].email);
console.log(users.usuarios[1].senha + '\n');