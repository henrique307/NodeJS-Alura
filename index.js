import { pegaArquivo } from "./cli.js";
import { validaURLs } from "./http-validation.js";

async function processaTexto() {
  const retorno = await pegaArquivo(process.argv[2]);

  if (process.argv[3] === "validar") {
    console.log("lista de links validados => ", await validaURLs(retorno));
  } else {
    console.log("lista de links => ", retorno);
  }
}

processaTexto();