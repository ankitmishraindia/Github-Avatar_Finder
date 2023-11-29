
import './AvatarList.css'
import Avatar from "../Avatar/Avatar";
import useAvatarList from '../../hook/useAvatarList';



function AvatarList(){
    
    

   
    const [avatarList]=useAvatarList('');
    return(
        <div className="avatarList">
             {(avatarList.isloading)?avatarList.isloading:(avatarList.avatarImage[0])?avatarList.avatarImage.map((item)=>(<Avatar source={item.avatar_url} name={item.login} key={item.id}/>)):avatarList.Error}
        </div>
    )
}
export default AvatarList;