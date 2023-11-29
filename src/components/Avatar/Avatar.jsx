import './Avatar.css'
function Avatar({name,source}){

    return(
        <div className="avatar">
           <img src={source} alt="" />
           <p>{name}</p>
        </div>
    )
}

export default Avatar;