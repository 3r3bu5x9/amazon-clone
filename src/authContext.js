import {createContext, useState} from "react";

const AuthContext = createContext({})

export function AuthProvider({children}){
    const [loginStatus, setLoginStatus] = useState(0)
    return(
        <AuthContext.Provider value={{loginStatus, setLoginStatus}}>{children}</AuthContext.Provider>
    )
}
export default AuthContext