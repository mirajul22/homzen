import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}){
    const [User ] = useState({
        name: "Manish",
    })

    return <UserContext.Provider value={User} >{children}</UserContext.Provider>
}