import { UserContext } from "@/contexts/UserContext";
import usePersistedState from "@/hooks/usePersistedState";

const UserProvider = ({ children }: { children: React.ReactNode}) => {
    const [authData, setAuthData] = usePersistedState('auth', {});

    const userLoginHandler = (data: object) => {
        setAuthData(data);
    }

    const userLogoutHandler = () => {
        setAuthData({});
    }
    
    return (
    <>
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    </>)
};

export default UserProvider;
