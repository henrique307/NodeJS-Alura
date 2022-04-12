//const chalk = require('chalk');
import chalk from "chalk";
import fs from "fs"

// REGEX https://regex101.com
// DEVOLVE QUAL QUER QUE TENHA SIDO O ERRO CASO NÃO DOCUMENTADO NA LISTA

function extraiLinks(texto) {
  let regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s]*.[^\s]*)\)/gm;
  let arrayResultados = [];
  let temp;

  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }

  return arrayResultados.length === 0 ? 'Não há links aqui' : arrayResultados;
}

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
    let texto = await fs.promises.readFile(caminho, "utf-8");
    return extraiLinks(texto);
  } catch (err) {
    throw new Error(err);
  }
}

//pegaArquivo("./arquivos/texto1.md");

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

//console.log(chalk.green(pegaArquivo('./arquivos/texto1.md')))


export { pegaArquivo , extraiLinks , trataErro}