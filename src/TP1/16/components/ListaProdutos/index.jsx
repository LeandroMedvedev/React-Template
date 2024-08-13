/* eslint-disable no-unused-vars */
import { produtos } from "../../data/produtos"
import CartaoProduto from "../CartaoProduto"
import './ListaProdutos.css'

export default function ListaProdutos() {
    return (
        <div className="conteiner-produto">
            {produtos.map(({nome, descricao, preco, imagem}, indice) => (
                <CartaoProduto key={indice} nome={nome} descricao={descricao} preco={preco} imagem={imagem} />
            ))}
        </div>
    )
}