import { pegaArquivo } from "./cli.js";
import chalk from "chalk";

async function processaTexto() {
  const retorno = await pegaArquivo(process.argv[2])
  console.log(chalk.yellow('lista de links => '), retorno)
}

processaTexto()