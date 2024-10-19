import { useEffect } from "react"

export function useEventsListener({eventType, handle, enabled}) {

    useEffect(() => {

        // subcripcion:
        if(enabled) {
            console.log('subcribe', enabled )
            window.addEventListener(eventType, handle) // la subcripciones siguen vigentes, hay que desuscribirse limpiando el efecto
        }

        // cleanup:
        // -> cuando el componente se desmonta
        // -> cuando cambian las dependencias, antes de ejecutar
        //    el efecto de nuevo
        return () => { // cleanup method
            console.log('cleanup')
            window.removeEventListener(eventType, handle)
        }

        }, [enabled])

}