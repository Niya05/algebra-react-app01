import "./avatar.css"

export function Avatar(props) {
    return <img className="avatar" src={props.src} alt={props.alt} />
}