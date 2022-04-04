//const chalk = require('chalk');
import chalk from 'chalk';

const azul = chalk.blue
const vermelho = chalk.red

const testoFuncao = `${azul("testo retornado")} por ${vermelho("uma função")}`

function retornaTexto(texto){
    return texto
}

console.log(retornaTexto(testoFuncao))