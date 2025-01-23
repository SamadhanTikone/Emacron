import  { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    fullName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="contact ">
    <div className="contact-container " >
      <div className="contact-form-container bg-gray-300">
        <h2 className="text-black contact">
       Contact with <span className="text-blue-700"> Us</span>
        </h2>
        <p className={`text-xl  mb-4 text-black`}> Reach out today
        and unlock your future possibilities!</p>
        <form onSubmit={handleSubmit} >
          <div className="form-group-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
