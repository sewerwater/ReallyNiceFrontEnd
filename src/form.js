import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { sendTextMessageToBackEnd } from "./twilio";

function textForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [words, setWords] = useState("");

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleWords(e) {
    setWords(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("its broken its broken its broken its broken (lie)");
    console.log({ phoneNumber });
    console.log({ words });
    sendTextMessageToBackEnd(phoneNumber, words);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="group">
          <Form.Label>Phone Number here</Form.Label>
          <Form.Control
            type="text"
            classname="box1"
            placeholder="Number Insert Here"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumber(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="group">
          <Form.Label>Tell me something BORING</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Text Insert Here"
            value={words}
            onChange={(e) => handleWords(e)}
          ></Form.Control>
        </Form.Group>
        <Button className="btn" variant="primary" type="submit">
          Send Text
        </Button>
      </Form>
    </div>
  );
}

export default textForm;
