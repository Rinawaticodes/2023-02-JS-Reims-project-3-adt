import NavbarUser from "../../components/Header/NavbarUser";
import FooterUser from "../../components/Footer/FooterUser";
import Instruction from "../../components/ContentUser/Instruction";
import "../../App.css";

function HomeUser() {
  return (
    <div className="home">
      <NavbarUser />
      <Instruction />
      <FooterUser />
    </div>
  );
}

export default HomeUser;
