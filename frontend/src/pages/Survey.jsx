import NavbarUser from "../components/NavbarUser";
import FooterUser from "../components/FooterUser";
import Question from "../components/Question";
import Categories from "../components/Categories";
import "../App.css";

function Survey() {
  return (
    <>
      <NavbarUser />
      <div className="homes">
        <Categories />
        <Question />
      </div>
      <FooterUser />
    </>
  );
}

export default Survey;
