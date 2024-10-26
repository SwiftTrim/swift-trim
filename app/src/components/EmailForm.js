import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bqyo429",
        "template_99lhao6",
        formData,
        "GqGf0jDmgagg0HXEo"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Reset form data or show success message
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="House Number & Street Address"
          required
        />
        <input
          type="text"
          name="citystatezip"
          value={formData.citystatezip}
          onChange={handleChange}
          placeholder="City, State, & ZIP Code"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please tell us what your inquiry is regarding so we can be better prepared when we contact you. Thank you."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
