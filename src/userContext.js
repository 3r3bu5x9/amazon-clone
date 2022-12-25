import {createContext, useState} from "react";

const UserContext = createContext({})

export function UserProvider({children}){
    let [user, setUser] = useState({emoji:'❌',name:'' ,email:'', password:''})
    return(
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}
export default UserContext;