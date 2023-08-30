const express = require('express');
const rota = express();
const controlador = require('./controladores/jogos')
const controlador2 = require('./controladores/conversor')
const intermediario = require('./intermediarios/conversor')

rota.get('/jogos', controlador.exibirJogosSuportados)
rota.get('/converter', intermediario.verificarJogosESensi, controlador2.converterJogo1PJogo2)

module.exports = rota;