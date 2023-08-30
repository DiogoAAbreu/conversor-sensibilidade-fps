const { jogos } = require('../ultilitarios');

const verificarJogosESensi = async (req, res, next) => {
    const { jogo1, jogo2, dpi1, dpi2 } = req.body;
    if (!jogo1 || !jogo2) {
        return res.status(400).json({ mensagem: 'Necessario informar 2 jogos' })
    }
    if (isNaN(dpi1) || isNaN(dpi2)) {
        return res.status(400).json({ mensagem: "Informe dpi's validos." })
    }
    next()
}

module.exports = { verificarJogosESensi }