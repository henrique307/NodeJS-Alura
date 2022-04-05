//const chalk = require('chalk');
import chalk from "chalk";
import fs from "fs";

// REGEX https://regex101.com
// DEVOLVE QUAL QUER QUE TENHA SIDO O ERRO CASO NÃO DOCUMENTADO NA LISTA

const alo = "A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"

function extraiLinks(texto){
    let regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s]*.[^\s]*)\)/gm;
    let arrayResultados = []
    let temp;

    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({ [temp[1]]: temp[2] })
    }

    return arrayResultados
}

extraiLinks(alo)

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
    console.log(extraiLinks(texto))
  } catch (err) {
    trataErro(err);
  }
}

pegaArquivo("./arquivos/texto1.md");













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
