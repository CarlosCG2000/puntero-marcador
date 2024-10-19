import React from "react"
import { useState } from "react"
import { useEventsListener } from "../hooks/useEventsListener"

export function FollowMouse() {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    // [] --> solo se ejecuta una vez, cuando se monta el componente
    // [enabled] --> se ejecuta cuando se monta el componente y cuando cambia la variable enabled
    // [undefined] --> se ejecuta cada vez que se renderiza el componente

    // puntero en movimiento
    const handleMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY })
        console.log('handleMove', { x: event.clientX, y: event.clientY })
    }

    //window.addEventListener() // No se debe hacer esto, porque se a va a ejecutar cada vez que se renderice el componente. Mejor usar useEffect, ya que tenemos que controlar cuando nos vamos a subscribir a un evento

    // CUSTOM HOOK: que tiene un useEffect
    useEventsListener({ eventType: 'pointermove', handle: handleMove, enabled: enabled })

    // useEffect(() => {

    //   // subcripcion:
    //   if(enabled) {
    //     console.log('subcribe', { enabled })
    //     window.addEventListener('pointermove', handleMove) // la subcripciones siguen vigentes, hay que desuscribirse limpiando el efecto
    //   }

    //   // cleanup:
    //   // -> cuando el componente se desmonta
    //   // -> cuando cambian las dependencias, antes de ejecutar
    //   //    el efecto de nuevo
    //   return () => { // cleanup method
    //     console.log('cleanup')
    //     window.removeEventListener('pointermove', handleMove)
    //   }

    // }, [enabled])

    //cambiar el cuerpo del puntero

    /* useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)
        // cuando se desmonta el componente, se elimina la clase no-cursor
        return () => {
        document.body.classList.remove('no-cursor')
        }
    }, [enabled]) */

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            />
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} seguir puntero
            </button>
        </>
    )
}
