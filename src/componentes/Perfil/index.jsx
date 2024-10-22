import React, {useState} from 'react';
import './Perfil.css';

const Perfil= () =>{
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [valorIMC, setValorIMC] = useState(0)
    const [msn, setMsn] = useState('')

    function calcularIMC(evt)
    {
        let imc;
        imc = peso / (altura * altura)
        setValorIMC(imc);
        if(imc < 18.5) {
            setMsn('voce esta abaixo do peso');
        }else if(imc >= 18.5 && imc < 24.9) 
            {
                setMsn('voce esta com peso normal.');
            }else if(imc >=24.9 && imc <29.9){
                setMsn('voce esta com sobrepeso.');
            }else{
                setMsn('voce esta com obesidade');
            }
    }


    return (
        <>
        <div className="perfil">
            <div className="perfil-titulo">
            <h1 >Ola, bem vindo a calculadora de IMC!</h1>
            <h2 >Para comecarmos precisamos de algumas informacoes suas, ok?</h2>
            </div>
        <h3>Informe sua altura e peso</h3>
        <input
        className='perfil-input' 
        id="altura" 
        type="number"
        value={altura} 
        onChange={e => setAltura(e.target.value)} 
        placeholder="Altura" >
        </input>
        <input 
        className='perfil-input' 
        id="peso" 
        type="number" 
        value={peso} 
        onChange={e => setPeso(e.target.value)}
        placeholder="Peso">
        </input>

        <button className='perfil-input' onClick={calcularIMC} >Calcular</button>

        <span className='resultado'>Seu imc e: {valorIMC}</span>
        <div>
            <span className='mesnDePeso'>{msn}</span>
        </div>
        </div>
        </>
    )
}

export default Perfil;