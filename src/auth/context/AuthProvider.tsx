import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { useReducer } from 'react';
import { types } from '../types/types';


const initState = () => {
    const userLocalStorage = localStorage.getItem('user');
    const user = userLocalStorage !== null ? JSON.parse(userLocalStorage) : null;

    return {
        logged: user !== null,
        user
    }
}

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, {}, initState);

    const login = (name: string) => {

        const user = {
            user_id: new Date().getTime(),
            name
        }

        const action = {
            type: types.LOGIN,
            payload: user
        };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }


    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.LOGOUT,
            user: null
        };

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>{children}</AuthContext.Provider>
    )
}
