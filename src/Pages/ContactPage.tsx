import React from "react";
import "./contactPage.css";
import Head from "../components/Head";
import ContactBody from "../components/ContactBody";
import Foot from "../components/Foot";
function ContactPage() {
  return (
    <div className="container">
      <Head />
      <ContactBody />
    </div>
  );
}

export default ContactPage;
