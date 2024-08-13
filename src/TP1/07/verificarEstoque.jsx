export default function verificarEstoque(produtos) {
    return produtos.filter(({quantidadeEmEstoque}) => quantidadeEmEstoque > 0)
}