export default function calcularMediaAvaliacoes(avaliacoes) {
    const quantidadeAvaliacoes = avaliacoes.length
    const soma = avaliacoes.reduce((acumulador, valorAtual) => {return acumulador + valorAtual}, 0)
    const media = soma / quantidadeAvaliacoes

    return media
}