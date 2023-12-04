import { Link } from "react-router-dom";
import logo from "../../assets/ecotourisme.jpeg";
import "./Footer.css";

function FooterUser() {
  return (
    <footer>
      <img src={logo} alt="logoEcotourisme" className="footer-img-admin" />
      <p>© 2023 ADT Marne. Tous Droits Réservés.</p>
      <div>
        <Link to="/legal">Mentions légales</Link>
      </div>
    </footer>
  );
}

export default FooterUser;
