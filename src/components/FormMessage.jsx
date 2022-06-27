import "./message.css";

function FormMessage(props) {
    if (!props.visible) return null;
  
    return <div className="form-error">Successfully signed in!!</div>;
  }

export default FormMessage;