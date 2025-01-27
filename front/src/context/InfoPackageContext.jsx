// InfoPackageContext.js
import React, { createContext, useState } from 'react';

export const InfoPackageContext = createContext();

export const InfoPackageProvider = ({ children }) => {
  const [mensaje, setMensaje] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [peso, setPeso] = useState("");
  const [valor, setValor] = useState("");

  return (
    <InfoPackageContext.Provider value={{ mensaje, setMensaje, tamaño, setTamaño, peso, setPeso, valor, setValor }}>
      {children}
    </InfoPackageContext.Provider>
  );
};
