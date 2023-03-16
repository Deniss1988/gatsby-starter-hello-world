import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/contact.module.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contact}>
        <h1>Contact</h1>
          <ContactForm/>
      </div>
    </Layout>
  );
}
