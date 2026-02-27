const readline = require('readline')
const bycript = require('bcrypt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function gerarHash(senha){
    const saltRounds = 10;
    const senhaHash = bycript.hashSync(senha, saltRounds);

    return senhaHash;
}
rl.question("Write your name: ", (nome) => {
    rl.question("Write your age: ", (idade) => {
        console.log('Hi, ${nome}!');
        rl.question(" Write your email: ", (email) => {
            rl.question("Write your password: ", (senha) => {

                //generate hash
                
                const senhaHash = gerarHash(senha);

                //validar email

                if(!validarEmail(email)){
                    console.log("Email inválido. Por favor, insira um email válido.");
                    rl.close();
                    return;
                }

        if (idade >= 18) {
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }
        
        console.log(`Olá, ${nome}!`);
        console.log(`Seu email é: ${email}`);
        console.log(`Sua senha criptografada é: ${senhaHash}`);
        
    ""
        rl.close();
    });
    });
    });
});