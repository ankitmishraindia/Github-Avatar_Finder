import {  useEffect, useState } from "react";
import axios from 'axios';
function useAvatarList(){
    const [avatarList,setAvatarList]=useState({
        avatarImage:[],
        isloading:'Loading',
        Error:''
     })
     
   
     async function GetUsers(){
        try {
            //api calling to find user list
               const  response=await axios.get(`https://api.github.com/users`);
            setAvatarList((state)=>({
                ...state,
                avatarImage:response.data,
                isloading:''
            }))
        } catch (error) {
            console.log(error)
            //set error message to 
            setAvatarList((state)=>({
                ...state,
                isloading:'',
                Error:error.message||'something went wrong'
            }))
        }
     }

     useEffect(()=>{
        GetUsers()
     },[])

     return [avatarList]
}
export default useAvatarList;