//const chalk = require('chalk');
import chalk from "chalk";
import fs from "fs";

// DEVOLVE QUAL QUER QUE TENHA SIDO O ERRO CASO NÃO DOCUMENTADO NA LISTA

function trataErro(err) {
  switch (err.code) {
    case "ENOENT":
      throw new Error(chalk.red(err.code, "Caminho especificado ta errado"));
    default:
      throw new Error(chalk.red(err.code, "erro não especificado"));
  }
}

async function pegaArquivo(caminho) {
  try {
      const texto = await fs.promises.readFile(caminho, "utf-8");
    console.log(chalk.green(texto));
  } catch (err) {
    trataErro(err);
  }
}

// function pegaArquivo(caminho) {
//   fs.promises
//     .readFile(caminho, "utf-8")
//     .then((texto) => console.log(texto))
//     .catch((err) => trataErro(err));
// }

// function pegaArquivo(caminho) {

//   fs.readFile(caminho, "utf-8", (err, texto) => {
//     if (err) {
//       throw new Error(chalk.grey(err.code, "Caminho especificado ta errado"));
//     } else {
//       console.log(chalk.green(texto));
//     }
//   });
// }

pegaArquivo("./arquivos/texto1.md");

//console.log(chalk.green(pegaArquivo('./arquivos/texto1.md')))
