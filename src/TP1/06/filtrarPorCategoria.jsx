export default function filtrarPorCategoria(produtos) {
    const categoriaProcurada = 'Eletrônicos'
    
    return produtos.filter(({categoria}) => categoria.toLowerCase() === categoriaProcurada.toLowerCase())
}