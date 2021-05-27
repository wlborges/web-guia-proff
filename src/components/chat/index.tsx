import { FormEvent, useContext, useEffect, useState } from 'react'
import RobotImg from '../../assets/images/robot-img.svg'
import RobotHead from '../../assets/images/robot-head.svg'
import { IoMdSend } from 'react-icons/io'
import Api from '../../services/api'
import SessionContext from '../../contexts/session'

import './styles.css'
const Chat = () => {
    const { session } = useContext(SessionContext)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        { id: 1, type: "incoming", body: "Olá, eu sou a GABY assistente virtual do Guia Proff" },
        { id: 2, type: "incoming", body: "Eu te ajudarei com suas dificuldades na educação infantil" }
    ])

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setInput('')
        const body = { "sessionId": session, "text": input }
        const msg = await Api.post('/send', body)
        const text = msg.data.generic
        const myArray = []
        for (let i = 0; i < text.length; i++) {
            myArray.push({ id: messages.length + 1, type: 'incoming', body: text[i].text },)
        }
        console.log(myArray)
        setMessages([...messages,
        { id: messages.length + 1, type: 'outgoing', body: input },
        ...myArray
        ])
    }

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
                    <div className="chat-content">
                        {
                            messages.map((m: any) => {
                                return (
                                    <div key={m.id} className={m.type}>
                                        <span>{m.body}</span>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <footer>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Digite sua mensagem"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit">
                                <IoMdSend />
                            </button>
                        </form>
                    </footer>
                </div>
            }
        </div>
    )
}

export default Chat