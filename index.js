import { pegaArquivo } from "./cli.js";
import { validaURLs } from "./http-validation.js";

import chalk from "chalk";

async function processaTexto() {
  const retorno = await pegaArquivo(process.argv[2]);

  if (process.argv[3] === "validar") {
    console.log(chalk.green("lista de links validados => "), await validaURLs(retorno));
  } else {
    console.log(chalk.yellow("lista de links => "), retorno);
  }
}

processaTexto();
