import { useContext } from "react"
import Chat from "../../components/chat"
import Session from "../../components/session"
import Sidebar from "../../components/sidebar"
import SessionContext from '../../contexts/session'

import './styles.css'
const Home = () => {
    const { session } = useContext(SessionContext)

    return (
        <div id="home-page">
            <div className="sidebar-content">
                <Sidebar />
            </div>
            <div className={session ? "active session-content" : "session-content"}>
                <Session />
            </div>
            <div className="chat-content">
                <Chat />
            </div>
        </div>
    )
}

export default Home