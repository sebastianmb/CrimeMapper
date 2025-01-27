import React, { useState,useContext } from 'react';
import { InfoPackageContext } from '../../context/InfoPackageContext.jsx';

function InfoPackage() {

    /*const [mensaje, setMensaje] = useState("");
    const [tamaño, setTamaño] = useState("");
    const [peso, setPeso] = useState("");
    const [valor, setValor] = useState("");*/

    const { mensaje, setMensaje, tamaño, setTamaño, peso, setPeso, valor, setValor } = useContext(InfoPackageContext);

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case "mensaje":
                setMensaje(value);
                break;
            case "tamaño":
                setTamaño(value);
                break;
            case "peso":
                setPeso(value);
                break;
            case "valor":
                setValor(value);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <div className='pt-5'>
                <h2 className=' text-[16px] font-semibold italic'>Información del paquete</h2>

                <div className='relative'>
                    <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                        <textarea className='w-full p-1'
                            name="mensaje"
                            value={mensaje}
                            placeholder='Que debe hacer el mensajero'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex pt-5 items-center justify-between  bg-white'>

                        <select className='border-[1px] rounded-md outline-none focus:border-cyan-900' name="tamaño" value={tamaño} onChange={handleChange}>
                            <option value="" disabled selected hidden>Tamaño</option>
                            <option value="pequeño">Pequeño</option>
                            <option value="mediano">Mediano</option>
                            <option value="grande">Grande</option>
                        </select>

                        <input className='border-[1px] rounded-md outline-none focus:border-cyan-900'
                            type="number"
                            name="valor"
                            placeholder='Valor de clarado*'
                            value={valor}
                            onChange={handleChange}
                        />
                    </div>
                    <input className='mt-5 border-[1px] rounded-md outline-none focus:border-cyan-900'
                        type="number"
                        name="peso"
                        placeholder='Peso en gramos*'
                        value={peso}
                        onChange={handleChange}
                    />


                </div>

            </div>
        </div>
    )
}

export default InfoPackage
