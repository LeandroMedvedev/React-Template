export default function calcularTotalItens(itens) {
    return itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0)
}