import filtrarDisponiveis from "./filtrarDisponiveis"
import { produtos } from "./produtos"

export default function App() {
    const produtosDisponiveis = filtrarDisponiveis(produtos)

    console.log(produtosDisponiveis)

    return (
        <div className="App">
            <h1>Produtos Disponíveis</h1>
            <ul>
                {produtosDisponiveis.map(produto => (
                    <li key={produto.nome}>{produto.nome}</li>
                ))}
            </ul>
        </div>
    )
}