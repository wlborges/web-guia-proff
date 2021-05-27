import Home from './page/home'
import SessionContext from './contexts/session'

import './assets/styles/global.css'
import { useState } from 'react';
function App(): JSX.Element {
  const [session, setSession] = useState(false)

  return (
    <SessionContext.Provider value={{ session, setSession}}>
      <Home />
    </SessionContext.Provider>
  );
}

export default App;
