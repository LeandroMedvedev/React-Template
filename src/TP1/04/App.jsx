import {produtos} from './produtos'
import filtrarAcimaPreco from "./filtrarAcimaPreco"

export default function App() {
    const lista = filtrarAcimaPreco(produtos)

    console.log(lista)

    return (
        <div className="App">
            <h3>Produtos Acima de R$ 999,00</h3>
            <ul>
                {lista.map(({nome, preco}) => (
                <li key={nome}>
                    {nome} - R$ {preco}
                </li>
            ))}
            </ul>
        </div>
    )
}