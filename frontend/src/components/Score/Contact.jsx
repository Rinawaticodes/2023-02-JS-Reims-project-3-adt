import { Link } from "react-router-dom";
import "./Score.css";

function Contact() {
  return (
    <div className="btn-container">
      <Link to="/register" className="contact-btn1">
        Je voudrais être contacté
      </Link>

      <Link to="/" className="contact-btn">
        Je ne voudrais pas être contacté
      </Link>
    </div>
  );
}

export default Contact;
