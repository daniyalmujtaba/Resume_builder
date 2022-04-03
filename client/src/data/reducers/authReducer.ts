import Iuser, { DEFAULT_FIRE_TOKEN, DEFAULT_USER } from '../../interfaces/user';

import {createSlice, PayloadAction} from '@reduxjs/toolkit';



export interface IUserState {
    user: Iuser;
    fire_token: string;
}

export interface IUserActions {
    type: 'login' | 'logout' | 'authenticate';
    payload: {
        user: Iuser;
        fire_token: string;
    };
}


export const initialUserState: IUserState = {
    user: DEFAULT_USER,
    fire_token: DEFAULT_FIRE_TOKEN
};



const userSlice = createSlice({
    name : 'user',
    initialState : {
        user: DEFAULT_USER,
        fire_token: DEFAULT_FIRE_TOKEN
    } as IUserState,
    reducers : {
        login(state: IUserState, action: PayloadAction<IUserActions["payload"]>)   {
          localStorage.setItem('fire_token', action.payload.fire_token);
          state.user =  action.payload.user;
          state.fire_token = action.payload.fire_token;
          console.log(state, action.payload);
        },
        logout(state: IUserState, action: PayloadAction<IUserActions["payload"]>)   {
          localStorage.removeItem('fire_token');

          state = initialUserState;
        }
    
    }
})

export const authReducer = userSlice.reducer;
export const {login, logout} =  userSlice.actions;
