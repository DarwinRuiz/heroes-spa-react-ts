import { UserAuth } from '../interfaces/userAuth.interface';
import { types } from '../types/types';

export const authReducer = (state: UserAuth, action: any): UserAuth => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.LOGOUT:
            return {
                ...state,
                logged: false,
                user: null
            };

        default:
            return state;
    }
}