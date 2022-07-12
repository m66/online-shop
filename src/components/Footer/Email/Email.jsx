import React, { useRef } from "react";

import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_xwspqg4",
        form.current,
        "KBKx-pPQNZx6FMR5_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="email">
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Անուն</Form.Label>
          <Form.Control type="text" placeholder="Անուն" name="user_name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Էլ․ հասցե</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="user_email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ինչո՞վ կարող ենք Ձեզ օգնել</Form.Label>
          <Form.Control as="textarea" placeholder="Այստեղ կարող է լինել Ձեզ հետաքրքրող հարցերը" rows={3} name="message"/>
        </Form.Group>
        <Button type="submit">Ուղղարկել</Button>
      </Form>
    </div>
  );
};

export default Email;
