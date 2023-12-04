import NavbarUser from "../../components/Header/NavbarUser";
import FooterUser from "../../components/Footer/FooterUser";
import Question from "../../components/Question/Question";
import Categories from "../../components/Category/Categories";
import "../../App.css";

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
