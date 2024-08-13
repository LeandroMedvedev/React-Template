import encontrarProdutoPorNome from "./encontrarProdutoPorNome"
import {produtos} from './produtos'

export default function App() {
    const produto = encontrarProdutoPorNome(produtos)

    return (
        <div className="App">
            <h3>Produto Procurado</h3>
            {produto ? (
                <p>
                    {produto.nome} - R$ {produto.preco}
                </p>
                ) : (
                <p>Produto não encontrado</p>
            )}
        </div>
    )
}