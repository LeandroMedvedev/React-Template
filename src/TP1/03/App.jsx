import { avaliacoes } from "./avaliacoes"
import calcularMediaAvaliacoes from "./calcularMediaAvaliacoes"

export default function App() {
    const media = calcularMediaAvaliacoes(avaliacoes)

    console.log(media)

    return (
        <div className="App">
            <h3>Média das Avaliações</h3>
            <span>{media.toFixed(2)}</span>
        </div>
    )
}