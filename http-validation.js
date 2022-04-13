import fetch from 'node-fetch'

function handleError(err) {
    throw new Error(err)
}

async function checaStatus(arrayDeURLs){
    try {
        const arrayStatus = await Promise
            .all(arrayDeURLs
                .map(async url => {
                    const statusRes = fetch(url)
                    return (await statusRes).status
                })
            )
        
        return arrayStatus
    } catch(err) {
        handleError(err)
    }
}

function arrayString(arrayObjetos){
    return arrayObjetos
        .map(objeto => Object
            .values(objeto).join()
        )
}

async function validaURLs(arrayURLs) {

    const links = arrayString(arrayURLs)
    const statusLinks = await checaStatus(links)

    const resultados = arrayURLs.map((objeto,indice) => (
        {
            ...objeto,
            status: statusLinks[indice]
        }
    ))

    return resultados;
}

export { validaURLs }