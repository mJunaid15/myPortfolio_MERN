import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import "./contact.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { contactUs } from "../../Action/Action";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const {loading, message, error} = useSelector((state)=> state.update);
  const {
    message: alertMessage,
    error,
    loading,
  } = useSelector((state) => state.update);

  const dispatch = useDispatch();
  const alert = useAlert();
  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, alertMessage, dispatch]);
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
