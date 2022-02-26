import axios from 'axios';

const baseURL='https://jsonplaceholder.typicode.com/users'

const list=[
  {
    id:1,
    name:'soha',
    email:'soha@gmail.com'
  },
   {
    id:2,
    name:'doha',
    email:'doha@gmail.com'
  }
]
export const GetUsers= async()=>{
    let users = [];
    try {
        const response = await axios.get(baseURL)
        users = response.data;
    } catch (error) {
        console.log(error)
    }
    return{
      type:'USERS_LIST',
      paylod:users
    }
}

export const GetUserDetails= async(id)=>{
   let user = {}
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        user = response.data;
    } catch (error) {
        console.log(error)
    }
   return{
      type:'USERS_Details',
      paylod:user
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}