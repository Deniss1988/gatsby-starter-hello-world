import React from "react";

export default function ContactForm() {
  return (
    <form action="https://formsubmit.co/deniscj1988@gmail.com" method="POST">
      <p>Have a question or want to work together?</p>
      <input
        type="hidden"
        name="_subject"
        value="New message from my Portfolio website!"
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name.."
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Your email.."
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write something.."
        cols="30"
        rows="5"
        required
      ></textarea>

      <input type="submit" value="Send" />
      <input type="reset" value="Reset" />
    </form>
  );
}
