
import { useState } from 'react'
import { FollowMouse } from './components/FollowMouse'

function App() {

  const [mount, setMount] = useState(true)

  return (
    <main>
      {mount && <FollowMouse />}
      <button onClick={() => setMount(!mount)}>
        {mount ? 'Desmontar' : 'Montar'} componente
      </button>
    </main>
  )

}

export default App
