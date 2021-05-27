import Home from './page/home'
import SessionContext from './contexts/session'

import './assets/styles/global.css'
import { useState } from 'react';
function App(): JSX.Element {
  const [session, setSession] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, type: "incoming", body: "teste" },
    { id: 2, type: "outgoing", body: " saida" }
  ])

  return (
    <SessionContext.Provider value={{ session, setSession, messages, setMessages }}>
      <Home />
    </SessionContext.Provider>
  );
}

export default App;
