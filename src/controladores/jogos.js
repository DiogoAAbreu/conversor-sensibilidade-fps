const jogos = require('../ultilitarios')

const exibirJogosSuportados = async (req, res) => {
    return res.status(200).json(jogos)
}

module.exports = { exibirJogosSuportados }