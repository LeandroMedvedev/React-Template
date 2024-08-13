import './Rodape.css'
import LinkedinLogo from '../../assets/linkedin-logo.svg'
import GitHubLogo from '../../assets/github-logo.svg'
import TwitterLogo from '../../assets/twitter-logo.svg'
import YouTubeLogo from '../../assets/youtube-logo.svg'

export default function Contatos() {
    return (
        <footer>    
            <div className="nome">© 2024 Leandro Medeiros</div>
            <div>
                <p>Redes Sociais</p>
                <div>
                <ul className="midias-sociais">
                    <li>              
                    <a href="https://github.com/LeandroMedvedev" rel="author" target="_blank">                
                        <img src={GitHubLogo} alt="GitHub logo" />
                    </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/EvLeandr" rel="author" target="_blank">                
                        <img src={TwitterLogo} alt="Twitter logo" />
                    </a>              
                    </li>
                    <li>
                    <a href="https://www.youtube.com/@leandromedvedev" rel="author" target="_blank">                
                        <img src={YouTubeLogo} alt="Youtube logo" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/leandromedvedev/" rel="author" target="_blank">                
                        <img src={LinkedinLogo} alt="Linkedin logo" />
                    </a>                            
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}