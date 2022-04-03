import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../data/store';
import { DEFAULT_USER } from '../interfaces/user';

interface ComponentProps  {
  RouteComponent: React.FC,
}



export const PrivateElement : React.FunctionComponent<ComponentProps> = ({RouteComponent }) => {
  const user = useSelector((state : RootState) => state.authReducer.user);
  const dispatch = useDispatch();
  
  console.log(user, DEFAULT_USER);
  return  (
    user !== DEFAULT_USER ? <RouteComponent/> : <Navigate replace to='/login' /> 
  )
}