import Cabecalho from "./components/Cabecalho";
import Contatos from "./components/Contatos";
import Projeto from "./components/Projeto";
import { projetos } from "./data/projetos";

export default function App() {
    return (
        <div>
            <Cabecalho />

            {projetos.map(({url, titulo, resumo, github, descricao, tecnologias, imagem}, indice) => (
                <Projeto key={indice} url={url} titulo={titulo} resumo={resumo} gitHub={github} descricao={descricao} tecnologias={tecnologias} imagem={imagem}/>
            ))}
            
            <Contatos />
        </div>
    )
}