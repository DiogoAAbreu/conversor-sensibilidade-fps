const jogos = ['cs:go', 'valorant']

const jogoEhSuportado = async (nomeJogo) => {
    const nomeFormatado = nomeJogo.toLowerCase()
    if (jogos.includes(nomeFormatado)) {
        return true;
    } else {
        return false;
    }
}

const converterSensi = async (jogo1, jogo2, sensiEntrada) => {
    if (jogo1 === "valorant" && jogo2 === 'cs:go') {
        return sensiEntrada * 3.182
    }
    if (jogo1 === 'cs:go' && jogo2 === 'valorant') {
        return sensiEntrada * 0.314
    }
    if (jogo1 === jogo2) {
        return sensiEntrada;
    }
    return true;
}

module.exports = { jogos, jogoEhSuportado, converterSensi }