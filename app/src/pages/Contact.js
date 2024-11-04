import EmailForm from "../components/EmailForm";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-body">
        <div className="contact-header">
          <h2>Contact Us</h2>
        </div>
        <EmailForm />
      </div>
    </>
  );
}
