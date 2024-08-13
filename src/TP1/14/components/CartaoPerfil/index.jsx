import './CartaoPerfil.css'
import leandro from '../../imgs/leandro.jpg'

export default function CartaoPerfil() {
    return (
        <section className='conteiner'>
            <h1>Leandro Medeiros</h1>
            <p>
                Nascido em Niterói-RJ e criado em Bragança Paulista-SP, Leandro é um Desenvolvedor de Software Full Stack com formação acadêmica em Engenharia de Software pelo Instituto Infnet. Atualmente no 4º período do bacharelado, está em busca de uma nova oportunidade no mercado de trabalho. No momento, está focado em sua recolocação profissional e no aprimoramento de suas habilidades em TI.
            </p>
            <img src={leandro} alt="Foto de Leandro Medeiros" title='Leandro Medeiros' />
        </section>
    )
}