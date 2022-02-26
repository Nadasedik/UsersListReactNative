import React from 'react';
import { Text, Box ,Button ,FlatList,VStack ,Heading} from 'native-base';
import { UserContext } from "../context"
import { useContext ,useEffect} from "react";
import {GetUsers} from '../actions'
import User from './user'
const Home=(props)=>{

const {state,dispatch}=useContext(UserContext)
console.log("From Home")
   useEffect(()=>{
         const resolveAction = async () => {
      dispatch(await GetUsers());
    };
    resolveAction();
   },[])
    return(

        <VStack>
        <Heading fontSize="xl" p="4" pb="3"  textAlign="center">
        Users List 
        </Heading>
        <FlatList
        data={state.list} renderItem={
          ({item})=><User item={item} {...props}/>
      } />
        </VStack>
    )
}
export default Home;