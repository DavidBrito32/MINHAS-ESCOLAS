/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const HooksContext = createContext();

export const HooksProvider = ({children}) => {
    return (
        <HooksContext.Provider value={{}}>
            {children}
        </HooksContext.Provider>
    )
}