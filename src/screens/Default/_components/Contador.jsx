import { useState, useEffect } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const handleContador = () => {
        setContador(contador+1);
    };
    const handleContadorM = () => {
        setContador(contador-1);
    };
    //Esta función especial se ejecuta cuando el componente se haya montado
    //[]
    useEffect(() => {
        setContador(12);
    }, []);
    
    //Esta función especial se ejecuta cuando haya cambiado el valor de contador
    // [contador]
    useEffect(() => {
        if (contador === 15){
            alert('El contador vale: 15')
        }
    }, [contador]);

    //Esta función especial se ejecuta cuando el componente se desmonta
    useEffect(() => {
        return () => {
            console.log('Componente desmontado');
        }
    });
    return (
        <>
            <h1>Componente Contador</h1>
            <h3>{contador}</h3>
            <div>
                <button onClick={handleContador} type="button">Aumentar</button>
            </div>
            <div>
                <button onClick={handleContadorM} type="button">Disminuir</button>
            </div>
        </>
    );
};

export default Contador;