import RobotImg from '../../assets/images/robot-img.svg'
import './styles.css'
const Chat = () => {
    return(
        <div id="chat">
           <div className="session-off">
                <img src={RobotImg} alt="Iniciar Chat" />
                <span>PRENCHA O FORMULARIO PARA INICIAR O CHAT</span>
           </div>
           <div className="session-on">
                <header></header>
                <body>
                    
                </body>
                <footer></footer>
           </div>
        </div>
    )
}

export default Chat