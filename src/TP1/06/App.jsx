import filtrarPorCategoria from './filtrarPorCategoria'
import {produtos} from './produtos'

export default function App() {
    const lista = filtrarPorCategoria(produtos)

    console.log(lista)

    return (
        <div className="App">
            <h3>Categoria Eletrônicos</h3>
            {lista.map(({nome, categoria}) => (
                <p key={nome}>{nome} - {categoria}</p>
            ))}
        </div>
    )
}