import "./user.css"
import { Avatar } from "./Avatar"

export function User(props) {
    const avatarAlt = "Avatar for " + props.username; 
    return (
    <div className="user">
        <Avatar src={props.src} alt={avatarAlt} />
        <div>{props.username}</div>
    </div>
    );
}