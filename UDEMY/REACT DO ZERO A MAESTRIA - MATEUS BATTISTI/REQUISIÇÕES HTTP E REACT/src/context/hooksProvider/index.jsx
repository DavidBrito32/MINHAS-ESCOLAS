/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const HooksContext = createContext();

export const HooksProvider = ({children}) => {

    const [boasVindas] = useState("Bem vindo")

    return (
        <HooksContext.Provider value={{boasVindas}}>
            {children}
        </HooksContext.Provider>
    )
}