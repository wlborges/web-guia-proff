import { FormEvent, useState, useContext } from 'react'
import { FiUser, FiMail } from 'react-icons/fi'
import RobotHead from '../../assets/images/robot-head.svg'
import SessionContext from '../../contexts/session'

import './styles.css'
const Session = () => {
    const {session, setSession} = useContext(SessionContext)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setSession(!session)
    }

    return (
        <div id="session">
            {
                !session &&
                <form onSubmit={handleSubmit}>
                    <span>Iniciar Chat</span>
                    <div className="input-content">
                        <FiUser />
                        <input type="text" 
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                         />
                    </div>
                    <div className="input-content">
                        <FiMail />
                        <input type="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <button type="submit">INICIAR</button>
                </form>
            }
            {
                session &&
                <div className="session-on">
                    <img src={RobotHead} alt="Session On" />
                    <h1>Você esta conversando com a <span>GABY</span></h1>
                </div>
            }
        </div>
    )
}

export default Session