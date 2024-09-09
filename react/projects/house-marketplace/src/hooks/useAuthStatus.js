import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
    const [checkStatus, setCheckStatus] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    const isMounted = useRef(true)

    useEffect(() => {
        if (isMounted) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLoggedIn(true)
                }
                setCheckStatus(false)
            })
        }

        return () => {
            isMounted.current = false
        }

    }, [isMounted])

    return { checkStatus, loggedIn }
}
