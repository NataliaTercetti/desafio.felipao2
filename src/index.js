const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

rl.question('Digite o número de vitórias: ', (vitorias) => {
    rl.question('Digite o número de derrotas: ', (derrotas) => {
        // Converte as entradas para inteiros
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        calcularNivel(vitorias, derrotas);

        // Fecha a interface readline
        rl.close();
    });
});
