import EmailForm from "../components/EmailForm";
import "./Quote.css";

export default function Quote() {
  return (
    <>
      <div className="quote-body">
        <div className="quote-header">
          <h2>Free Quote</h2>
        </div>
        <EmailForm />
      </div>
    </>
  );
}
