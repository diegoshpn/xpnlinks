import { type ReactNode, useEffect, useState } from 'react'
import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

interface PrivateProps{
    children: ReactNode
}

export function Private({ children }: PrivateProps): any{

    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem("@xpnlinks", JSON.stringify(userData))
                setLoading(false)
                setSigned(true)

            }else{
                setLoading(false)
                setSigned(false)
            }
        })

        return () => {
            unsub()
        }

    }, [])

    if(loading){
        return <div></div>
    }

    if(!signed){ // false
        return <Navigate to="/login" />
    }

    return children
}