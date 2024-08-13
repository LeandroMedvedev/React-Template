export default function filtrarAcimaPreco(produtos) {
    const precoMinimo = 999

    return produtos.filter(({preco}) => preco > precoMinimo)
}