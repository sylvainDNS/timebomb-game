import { useEffect } from 'react'
import { io } from 'socket.io-client'

const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:4444')
    socket.on('connect', res => {
      console.log(res)
    })

    return () => socket.disconnect()
  }, [])

  return <div>Timebomb Game</div>
}

export default App
