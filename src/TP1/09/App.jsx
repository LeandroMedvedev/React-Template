import agruparPorCategoria from "./agruparPorCategoria"
import {produtos} from './produtos'

export default function App() {
    const produtosAgrupados = agruparPorCategoria(produtos)

    console.log(produtosAgrupados)

    return (
        <div className="App">
            <h2>Produtos Agrupados por Categoria</h2>
            <ul>
                {Object.entries(produtosAgrupados).map(([categoria, nomes]) => (
                <li key={categoria}>
                    <strong>{categoria}:</strong>
                    <ul>
                    {nomes.map(nome => (
                        <li key={nome}>{nome}</li>
                    ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
    )
}