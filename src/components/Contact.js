import React from 'react'

const Contact = () => (
  <section id="three">
    <h2>Let's Chat</h2>
    <div className="row">
      <div className="8u 12u$(small)">
        <form method="post" action="#">
          <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
            <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
            <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
          </div>
        </form>
        <ul className="actions">
          <li><input type="submit" value="Send Message" /></li>
        </ul>
      </div>
      <div className="4u 12u$(small)">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
            <a href="#">kidchenko@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Contact;