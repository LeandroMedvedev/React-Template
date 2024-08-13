import calcularPrecoTotal from "./calcularPrecoTotal";

export default function App() {
    const preco = 39.99
    const quantidade = 3
    const total = calcularPrecoTotal(preco, quantidade)

    return (
        <div className="App">
            <h3>Calculadora de Preço Total</h3>
            <div>
                <p>Preço do Produto: R${preco.toFixed(2)}</p>
                <p>Quantidade: {quantidade}</p>
                <p>Total: R${total.toFixed(2)}</p>
            </div>
        </div>
    )
}