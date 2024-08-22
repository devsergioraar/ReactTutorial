import { useEffect, useState } from 'react'
import './index.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log(clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <h3>Proyecto 3</h3>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '58%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`

      }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar Seguir puntero'}
      </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={ () => setMounted(!mounted)}>Toggle Mounted</button>
    </main>
  )
}

export default App
