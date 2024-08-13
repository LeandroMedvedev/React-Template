import verificarEstoque from './verificarEstoque'
import {produtos} from './produtos'

export default function App() {
    const estoque = verificarEstoque(produtos)

    console.log(estoque)

    return (
        <div className="App">
            <h3>Estoque</h3>
            <ul>
                {estoque.map(({nome, quantidadeEmEstoque}) => (
                    <li key={nome}>{nome} - {quantidadeEmEstoque}</li>
                ))}
            </ul>
        </div>
    )
}