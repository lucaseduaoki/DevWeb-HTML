function carregaArquivo(container, arquivo){

    fetch(arquivo).
    then(arq => arq.text()).
    then(elemento => {
        document.getElementById(container).innerHTML
    })
}
