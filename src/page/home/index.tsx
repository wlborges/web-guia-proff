import Chat from "../../components/chat"
import Session from "../../components/session"
import Sidebar from "../../components/sidebar"

import './styles.css'
const Home = () => {
    return (
        <div id="home-page">
            <div className="sidebar-content">
                <Sidebar />
            </div>
            <div className="session-content">
                <Session />
            </div>
            <div className="chat-content">
                <Chat />
            </div>
        </div>
    )
}

export default Home