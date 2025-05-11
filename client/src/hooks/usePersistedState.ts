import { useEffect, useState } from "react";

export default function usePersistedState(stateKey: string, initialState: any) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storageValue = localStorage.getItem(stateKey);
            if (storageValue) {
                setState(JSON.parse(storageValue)); 
            }
        }
    }, [stateKey]);

    const setPersistedState = (newState: object) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(stateKey, JSON.stringify(newState)); 
        }
        
        setState(newState);
    }

    return [state, setPersistedState];
}