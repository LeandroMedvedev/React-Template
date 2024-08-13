export default function encontrarProdutoPorNome(produtos) {
    const produtoProcurado = 'Laptop'
    return produtos.find(({nome}) => nome.toLowerCase() === produtoProcurado.toLowerCase())
}