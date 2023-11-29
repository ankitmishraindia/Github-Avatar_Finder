
import Avatar from "../Avatar/Avatar"
import useOneUserAvatar from "../../hook/useOneUserAvatar";

function OneUserAvatar({userName}){
      const [avatarData]=useOneUserAvatar(userName)
      
    return(
        <div className="avatarList">
             {(avatarData.isloading)?avatarData.isloading:(avatarData.User[0])?avatarData.User.map((item)=>(<Avatar source={item.avatar_url} name={item.login} key={item.id}/>)):avatarData.Error}
        </div>
    )
}
export default OneUserAvatar;