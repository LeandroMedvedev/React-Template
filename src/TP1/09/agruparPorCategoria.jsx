export default function agruparPorCategoria(produtos) {
    return produtos.reduce((resultado, {nome, categoria}) => {
        if (!resultado[categoria]) {
            // Se categoria não existir no resultado, cria uma nova chave com um array vazio
            resultado[categoria] = []
        }

        // Adiciona nome do produto ao array da categoria
        resultado[categoria].push(nome)

        return resultado
    }, {})
}