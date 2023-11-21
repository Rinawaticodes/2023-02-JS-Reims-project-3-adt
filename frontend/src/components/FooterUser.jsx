import { Link } from "react-router-dom";
import logo from "../assets/ecotourisme.jpeg";
import "./Footer.css";

function FooterUser() {
  return (
    <footer>
      <img src={logo} alt="logoEcotourisme" className="footer-img" />
      <div className="footer-text">
        <div>
          <Link to="/legal" className="footer-link">
            Mentions légales
          </Link>
        </div>
        <div>
          <Link to="/login" className="footer-link">
            Connexion Admin
          </Link>
        </div>
        <div>
          <p>© 2023 ADT Marne. Tous Droits Réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterUser;
