import { useState } from "react";

const baseUrl: string = 'http://localhost:3030/users/';

export const useRegister = () => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const register = async (username: string, email: string, password: string) => {
        setLoading(true);

        try{
            const res = await fetch(`${baseUrl}register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            const authToken = await res.json();
            return authToken;
        } catch(err: any){
            setError(err.message);
            console.log(err.message);
        } finally{
            setLoading(false);
        }
    };

    return {
        register,
        loading,
        error,
    }
};

export const useLogin = () => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        setLoading(true);

        try{
            const res = await fetch(`${baseUrl}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if(!res.ok){
                return {
                    error: 'Wrong email or password!'
                }
            }
            const authToken = await res.json();
            return authToken;
        } catch(err: any){
            setError(err.message);
            console.log(err.message);
        } finally{
            setLoading(false);
        }
    };
    return {
        login,
        loading,
        error,
    }
};