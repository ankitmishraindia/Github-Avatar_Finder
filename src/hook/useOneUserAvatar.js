import axios from "axios"
import { useEffect, useState } from "react"
function useOneUserAvatar(userName){
    const [avatarData,setAvatarData]=useState({
        isloading:'Loading...',
        User:[],
        Error:''
    })

    async function getAvatar(){
        try {
            //api call with parameter 
            const response=await axios.get(`https://api.github.com/users/${userName}`)
            console.log(response.data)

            //set useState Data
            setAvatarData((state)=>({
                ...state,
                isloading:'',
                User:[response.data],
            }))
        } catch (error) {
            console.log(error)
            if(error.message==='Request failed with status code 404')
            {
                error.message="Avatar Not Found with given Name"
            }
            setAvatarData((state)=>({
                ...state,
                isloading:'',
                Error:error.message||'Something went wrong'
            }))
            
            window.alert(error.message)
            
        }
    }
    //Effect for better rendering
    useEffect(()=>{
        getAvatar()
    },[userName])

     
    return [avatarData]
}
export default useOneUserAvatar;