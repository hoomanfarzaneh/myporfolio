import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message, setMessage]= useState(false)
  const handelSubmit=(e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return <div className="contact" id="contact">
    <div className="left">
      <img src="assets/join.jpg" alt="" />
    </div>
    <div className="right">
      <form onSubmit= {handelSubmit}>
      <h2>Contact.</h2>
        <input type='text' placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
        {message && <span> Tanks, i'll replay ASAP :) </span>}
      </form>
    </div>
</div>;
}
