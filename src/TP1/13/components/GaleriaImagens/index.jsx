import './GaleriaImagens.css'
import imagem1 from '../../imgs/imagem1.jpg'
import imagem2 from '../../imgs/imagem2.jpg'
import imagem3 from '../../imgs/imagem3.jpg'

export default function GaleriaImagens() {
    const imagens = [
        { url: imagem1, legenda: 'Imagem 1' },
        { url: imagem2, legenda: 'Imagem 2' },
        { url: imagem3, legenda: 'Imagem 3' }
    ];

    return (
        <>
            <h1>Galeria de Imagens</h1>

            <div className="conteiner-imagens">
                {imagens.map(({url, legenda}, indice) => (                
                    <figure key={indice}>
                        <img src={url} title={`Imagem ${indice + 1}`} />
                        <figcaption>{legenda}</figcaption>
                    </figure>                
                ))}
            </div>
        </>
    )
}