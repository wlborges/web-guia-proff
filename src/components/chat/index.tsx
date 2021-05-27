import { FormEvent, useContext, useEffect, useState } from 'react'
import RobotImg from '../../assets/images/robot-img.svg'
import RobotHead from '../../assets/images/robot-head.svg'
import { IoMdSend } from 'react-icons/io'
import Api from '../../services/api'

import './styles.css'
import SessionContext from '../../contexts/session'
const Chat = () => {
    const { session } = useContext(SessionContext)
    const {messages, setMessages} = useContext(SessionContext)
    const [input, setInput] = useState('')
    
    async function chatBot(formInput:string){
        
        try {
            const body = {"sessionId":session, "text": formInput}
            const msg = await Api.post('/send', body)
            const text = msg.data.generic
            console.log(text)
            const array = []
            for(let i = 0; i < text.length; i++) {
                array.push([...messages, {id: messages.length + 1 ,type: 'incoming', body: text[i].text}])
            }
            console.log(array)
        } catch (error) {       
        }

    }
   
    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setInput('')
        setMessages([...messages, {id: messages.length + 1 ,type: 'outgoing', body: input}])
        
        const body = {"sessionId":session, "text": input}
        const msg = await Api.post('/send', body)
        const text = msg.data.generic
        const test = text[0].text
        console.log(test)
        setMessages([...messages, {id: messages.length + 1 ,type: 'incoming', body: 'Test'}])
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
                            messages.map((m:any) => {
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