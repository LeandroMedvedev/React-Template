import calcularTotalItens from './calcularTotalItens'
import {itens} from './itens'

export default function App() {
    const valorTotal = calcularTotalItens(itens)

    console.log(valorTotal)

    return (
        <div className='App'>
            <h3>Valor Total</h3>
            <p>R$ {valorTotal}</p>
        </div>
    )
}