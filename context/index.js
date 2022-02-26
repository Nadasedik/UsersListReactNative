import React from 'react';
import {createContext,useReducer} from 'react'
import {reducer} from '../reducers'
export const UserContext=createContext();

export default UsersProvider=({cildren})=>{
    
    const [state,dispatch]=useReducer(reducer,[{
     list:[],
     details:{}
  }])
    return(
        <UserContext.Provider value={{state,dispatch}}>
            {cildren}
        </UserContext.Provider>
    )
}