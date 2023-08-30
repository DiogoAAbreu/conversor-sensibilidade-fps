const { jogoEhSuportado, converterSensi } = require('../ultilitarios')

const converterJogo1PJogo2 = async (req, res) => {
    const { jogo1, jogo2, dpi1, dpi2, sensiEntrada } = req.body;

    const jogoEntrada = await jogoEhSuportado(jogo1);
    const jogoSaida = await jogoEhSuportado(jogo2)

    if (!jogoEntrada) {
        return res.status(400).json({ mensagem: 'Jogo 1 não é suportado pelo sistema.' })
    }
    if (!jogoSaida) {
        return res.status(400).json({ mensagem: 'Jogo 2 não é suportado pelo sistema.' })
    }
    if (!sensiEntrada) {
        return res.status(400).json({ mensagem: 'Necessario inserir a sensibilidade do primeiro jogo.' })
    }

    const multiplicadorDpi = dpi1 / dpi2
    const sensi = await converterSensi(jogo1, jogo2, sensiEntrada);
    const sensiSaida = sensi * multiplicadorDpi

    return res.status(200).json({ Sensibilidade: sensiSaida })
}

module.exports = { converterJogo1PJogo2 }