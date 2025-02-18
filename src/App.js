import "./styles.css";
import TextForm from "./form.js";

export default function App() {
  return (
    <div className="App">
      <h1>text senderizer</h1>
      <h2>Type down here for your text to be senderized!</h2>
      <TextForm></TextForm>
    </div>
  );
}
