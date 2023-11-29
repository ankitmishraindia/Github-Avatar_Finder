import { useEffect, useState } from "react";
import AvatarList from "../AvatarList/AvatarList";
import Search from "../Search/Search";
import './AvatarFinder.css'
import OneUserAvatar from "../OneUserAvatar/OneUserAvatar";
function AvatarFinder(){
    const [searchText,setSearchText]=useState('')

    
    return(
        <div className="finderContainer">
           <Search updateTerm={setSearchText}/>
           {(searchText)?<OneUserAvatar userName={searchText}/>:<AvatarList/>}
        </div>
    )
}
export default AvatarFinder;