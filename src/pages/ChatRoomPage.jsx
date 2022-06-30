import Button from "../components/Button";
import { InputElement } from "../components/InputElement";
import { User } from "../components/User";
import { useState } from "react";
import { useEffect } from "react";

export function ChatRoomPage(props) {
  const [formState, setFormState] = useState({ message: '' });
  const [messages, setMessages] = useState([]);

/*  useEffect(() => {                       // hook
    console.log('New message stored!');  // Praćenje promjena stanja i props-a u komponenti
  }, [messages]);
*/  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.message !== '') {
      setMessages((state) => [...state, formState]);
      setFormState({ message: '' });
    }
  }
  
  const handleChange = (event) => {
    setFormState((state) => ({
          ...state,
          [event.target.name]: event.target.value,
    }));
  }

  const messagesElements = messages.map((item) => <div>{item.message}</div>)

  return (
    <div>
      <Button type="button" onClick={props.onSignOut}>Sign out</Button>
      <User src="/owlbear.png" username={props.user.username} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <InputElement name="message" label="Message" type="text" onChange={handleChange} value={formState.message} />
        </div>
        <div className="form-field">
          <Button type="submit">Send</Button>
        </div>
      </form>
      {messagesElements}
    </div>
  );
}