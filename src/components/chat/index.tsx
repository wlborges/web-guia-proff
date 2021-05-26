import { useState } from 'react'
import RobotImg from '../../assets/images/robot-img.svg'
import RobotHead from '../../assets/images/robot-head.svg'
import { IoMdSend } from 'react-icons/io'

import './styles.css'
const Chat = () => {
    const [session, setSession] = useState(true)
    return (
        <div id="chat">
            {
                !session &&
                <div className="session-off">
                    <img src={RobotImg} alt="Iniciar Chat" />
                    <span>PRENCHA O FORMULARIO PARA INICIAR O CHAT</span>
                </div>
            }
            {
                session &&
                <div className="session-on">
                    <header>
                        <label>
                            <img src={RobotHead} alt="GABY" />
                        </label>
                        <span>GABY</span>
                    </header>
                    <body>
                        <input type="text" placeholder="Digite sua mensagem" />
                        <button>
                            <IoMdSend />
                        </button>
                    </body>
                    <footer></footer>
                </div>
            }
        </div>
    )
}

export default Chat