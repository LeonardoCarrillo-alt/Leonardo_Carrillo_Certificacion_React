import { useEffect, useState } from 'react'
import '/si.css'
export default function SpaceInvader() {
    const [izquierda, setIzquierda] = useState<number>(40); 
    const [arriba, setArriba] = useState<number>(14);
    useEffect(() => {
        const movimiento: number = setInterval(()=> {
            setArriba((anterior) => {
                return anterior + 5
            })
            if(arriba > 25) {
                setArriba(14)
            }
        }, 1000);
        return () => clearInterval(movimiento);
    }, [])
    return (
        <>
        <section className="arma">
        </section>
        <section className='bala' style={{left:`${izquierda}rem`, bottom: `${arriba}rem`}}> 

        </section>
        </>
    )
}