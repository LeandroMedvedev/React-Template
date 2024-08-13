export default function filtrarDisponiveis(produtos) {
    return produtos.filter(produto => produto.disponivel)
}