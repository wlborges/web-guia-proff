import {FiUser, FiMail} from 'react-icons/fi'

import './styles.css'
const Session = () => {
    return(
        <div id="session">
            <form>
                <span>Iniciar Chat</span>
                <div className="input-content">
                    <FiUser/>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div className="input-content">
                    <FiMail/>
                    <input type="email" placeholder="Digite seu email" />
                </div>
                <button>INICIAR</button>
            </form>
        </div>
    )
}

export default Session