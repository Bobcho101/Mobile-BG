import { createContext, useContext } from "react";

type AuthToken = {
    _id: string;
    email: string;
    username: string;
    accessToken: string;
}

export type UserContextType = {
    _id: string;
    email: string;
    username: string;
    accessToken: string;
    userLoginHandler: (authToken: AuthToken) => void;
    userLogoutHandler: () => void;
};

export const UserContext = createContext<UserContextType>({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

export const useUser = () => useContext(UserContext);

