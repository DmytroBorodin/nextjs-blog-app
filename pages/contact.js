import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contacts/contact-form/contact-form";

function ContactPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="desctiption" content="Her you can send me your question" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
