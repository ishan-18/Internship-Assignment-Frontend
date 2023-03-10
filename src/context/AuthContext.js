import React, { useEffect, useState } from 'react'

const AuthState = React.createContext()

const AuthUpdate = React.createContext()

export function useAuthState() {
    const context = React.useContext(AuthState);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }
   
    return context;
  }


  export function useAuthUpdate() {
    const context = React.useContext(AuthUpdate);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }
    return context;
  }

function AuthContext({children}) {

  const userData = localStorage.getItem("currentUser")
  ? localStorage.getItem("currentUser")
  : null;
  
const token = localStorage.getItem("token")
  ? localStorage.getItem('token').toString()
  : null;
   
    const [auth, setauth] = useState({user:userData , token:token });


    
    useEffect(() => {
      // console.log('re-rendered')
      const userData = localStorage.getItem("currentUser")
        ? localStorage.getItem("currentUser")
        : null;
        
      const token = localStorage.getItem("token")
        ? localStorage.getItem('token').toString()
        : null;
  
        setauth({user:userData,token:token})
       
    }, []);

    const updateAuth  = (payload)=>{
    
        localStorage.setItem('currentUser',JSON.stringify(payload.user))
        localStorage.setItem('token',payload.token.toString())
        setauth({user:userData,token:token})
    }
    const updateUserOnly = (newuser)=>{
      console.log({...auth,user:newuser},"updating newuser")
        setauth({...auth , user:newuser})
       localStorage.setItem('currentUser',JSON.stringify(newuser))
    }
    return (
    <AuthState.Provider value={{auth}}>
        <AuthUpdate.Provider value={{updateAuth,updateUserOnly}}>
            {children}
        </AuthUpdate.Provider>
    </AuthState.Provider>
    )
}

export default AuthContext