import { useRef, useState, Fragment } from "react";
import Notification from "../../ui/notification/notification";

import classes from "./contact-form.module.css";

function ContactForm(props) {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  const [responseStatus, setResponseStatus] = useState();

  function submitFormHandler() {
    return {
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      message: messageInputRef.current.value,
    };
  }

  function sendMessageOnSubmit(e) {
    e.preventDefault();
    setResponseStatus({
      title: "Sending Message...",
      status: "panding",
      message: "Sending your message, please wait...",
    });
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ ...submitFormHandler() }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setResponseStatus({
          title: "Sent Message",
          status: "success",
          message: "Message sent succesfuly",
        });
      })
      .catch((error) => {
        console.log(error);
        setResponseStatus({
          title: "Error",
          status: "error",
          message: "Sending message id failed",
        });
      });
  }

  return (
    <Fragment>
      <section className={classes.contact} onSubmit={sendMessageOnSubmit}>
        <h1>How can I help you?</h1>
        <form action="" className={classes.form}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your email</label>
              <input ref={emailInputRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your name</label>
              <input ref={nameInputRef} type="text" id="name" />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea
              ref={messageInputRef}
              name="message"
              id="message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send message</button>
          </div>
        </form>
      </section>
      {responseStatus && (
        <Notification
          title={responseStatus.title}
          message={responseStatus.message}
          status={responseStatus.status}
        />
      )}
    </Fragment>
  );
}

export default ContactForm;
