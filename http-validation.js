function arrayString(arrayObjetos){
    return arrayObjetos.map(objeto => Object.values(objeto).join())
}

function validaURLs(arrayURLs) {
    return arrayString(arrayURLs)
}

export { validaURLs }