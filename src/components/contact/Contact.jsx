import React, { useState } from "react";
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";

import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <p className="section__subtitle text-cs">
        Let's <span>Talk About It</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>

            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">North Alabama, United States</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>

            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__card-data">Available Now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>

            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">jdmurrah@gmail.com</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>

            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">555-555-5555</p>
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact__form-input"
              />

              <div className="contact__form-div">
                <label className="contact_form-tag text-cs">
                  Your Email Address <b>*</b>
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact__form-input"
                />
              </div>
            </div>{" "}
          </div>

          <div className="contact__form-div">
            <label className="contact_form-tag text-cs">
              Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact_form-tag text-cs">
              Message <b>*</b>
            </label>
            <textarea
              className="contact__form-input contact__form-area"
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms and conditions</p>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
