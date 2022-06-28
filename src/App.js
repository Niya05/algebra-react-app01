import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import { User } from "./components/User";

// Komponenta - gradivna jedinica Reacta

function App() {
  /* parent - putem props (label, type) komunicira s child komponentom */
  const isSignedIn = true;

  return (
    <div>
      <User src="/owlbear.png" username="Niya" />
      <form className="form">
        <div className="form-field">
          <InputElement label="Username" type="text" />
        </div>
        <div className="form-field">
          <InputElement label="Password" type="password" />
        </div>
        <div className="form-field">
          <Button type="button">Sign in</Button>
          <Button type="reset">Reset</Button>
        </div>
        <div className="message-field">
          <FormError visible={!isSignedIn} />
          <FormMessage visible={isSignedIn} />
        </div>
      </form>
    </div>
  );
}

export default App;
