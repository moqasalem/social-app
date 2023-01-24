import './online.css'

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImage" />
                <span className="rightbarOnline"></span>
            </div>
            <div className="rightbarUsername">{user.username}</div>
        </li>
    )
}
