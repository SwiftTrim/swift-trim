import EmailForm from "../components/EmailForm";

export default function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <div>
        <ul>
          <li>
            <i className="fa fa-phone"> (770) 676-2846</i> {/* Phone Icon */}
          </li>
          <li>
            <i className="fa fa-envelope"> info@swifttrimga.com</i>
            {/* Envelope Icon */}
          </li>
        </ul>
      </div>
      <EmailForm />
    </>
  );
}
