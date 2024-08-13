/* eslint-disable react/prop-types */
import './CartaoProduto.css'

export default function CartaoProduto({imagem, nome, descricao, preco}) {
    return (
        <div className="conteiner-cartao">
            <figure>
                <img src={imagem} alt="Produto" />
                <figcaption>
                    {nome}
                </figcaption>
            </figure>
            <p>{descricao}</p>
            <span>{preco}</span>
        </div>
    )
}