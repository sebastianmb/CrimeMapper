import React, { useState,useContext } from 'react';
import { InfoPackageContext } from '../../context/InfoPackageContext.jsx';

function InfoPackage() {

    /*const [mensaje, setMensaje] = useState("");
    const [tamaño, setTamaño] = useState("");
    const [peso, setPeso] = useState("");
    const [valor, setValor] = useState("");*/

    const { mensaje, setMensaje } = useContext(InfoPackageContext);

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
                <h2 className=' text-[16px] font-semibold italic'>Crime description</h2>

                <div className='relative'>
                    <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                        <textarea className='w-full p-1'
                            name="mensaje"
                            value={mensaje}
                            placeholder='Briefly explain the crime...'
                            onChange={handleChange}
                        />
                    </div>
                    

                </div>

            </div>
        </div>
    )
}

export default InfoPackage
