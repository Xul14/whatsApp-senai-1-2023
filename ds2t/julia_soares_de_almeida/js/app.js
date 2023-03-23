'use strict'

export const preencherContatos = async(telefone) => {
    const url = `http://localhost:8080/v1/senai/perfil/numero-telefone/${telefone}`
    const response = await fetch(url)
    const contato = await response.json()

    return contato

}