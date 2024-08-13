/* eslint-disable react/prop-types */
import './Projeto.css'

export default function Projeto({url, titulo, resumo, gitHub, descricao, imagem, tecnologias}) {
    return (
        <section className="conteiner">
            <div>
                <header className="section-head">
                    <h2>
                    <a href={url} target="_blank" rel="author">
                        {titulo}
                    </a>
                    </h2>
                    <div>
                        <span>
                        <strong>{resumo}</strong>
                        </span>
                        <a href={gitHub} target="_blank" rel="author">
                        <strong>GitHub</strong>
                        </a>
                    </div>
                </header>

                <p>{descricao}</p>
                <span className="technologies">
                    <strong>{tecnologias}</strong>
                </span>
            </div>
            <div className="conteiner-imagem">
                <img src={imagem} />
            </div>
        </section>
    )
}