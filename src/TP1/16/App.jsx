import ListaProdutos from "./components/ListaProdutos";
import Store from './imgs/store.svg'

export default function App() {
    return (
        <>
            <header>
                <img className="icone" src={Store} alt="Ícone de uma loja" />
                <h1>VirtuStore</h1> 
            </header>
            <ListaProdutos />
        </>
    )
}