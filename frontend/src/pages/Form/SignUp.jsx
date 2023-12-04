import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import NavbarUser from "../../components/Header/NavbarUser";
import FooterUser from "../../components/Footer/FooterUser";
import logo from "../../assets/background_adt.jpeg";
import "./Register.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phonenumberRef = useRef();
  const companyNameRef = useRef();

  const { user } = useAuth();
  const navigate = useNavigate();

  const Alert = () => {
    Swal.fire({
      icon: "success",
      text: "Merci pour votre participation et votre compte a été bien créé. L'agence ADT Marne vous contactera",
      confirmButtonColor: "#3f7438",
    });
  };
  return (
    <>
      <NavbarUser />
      <div className="wrapper ">
        <div className="inner">
          <div className="image-holder">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              fetch(
                `${
                  import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
                }/users/${user.id}`,
                {
                  method: "put",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    lastname: lastnameRef.current.value,
                    firstname: firstnameRef.current.value,
                    phone_number: phonenumberRef.current.value,
                    company_name: companyNameRef.current.value,
                  }),
                }
              ).then((response) => {
                if (response.ok) {
                  navigate("/");
                } else {
                  // eslint-disable-next-line no-alert
                  alert(
                    "il y a eu un problème lors de la la création du compte"
                  );
                }
              });
            }}
          >
            <h3>Créez votre compte</h3>
            <div className="form-group">
              <div className="label-first">
                <label htmlFor="lastname" className="visually-hidden">
                  Nom{" "}
                </label>
                <input
                  ref={lastnameRef}
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Votre nom"
                  className="form-control"
                />
              </div>
              <div className="label-second">
                <label htmlFor="firstname" className="visually-hidden">
                  Prènom{" "}
                </label>
                <input
                  ref={firstnameRef}
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Votre prénom"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="email" className="visually-hidden">
                Email{" "}
              </label>
              <input
                ref={emailRef}
                type="text"
                id="email"
                name="email"
                placeholder="Votre adresse mail"
                className="form-control"
              />
              <MdEmail className="icon-btn" />
            </div>
            <div className="form-wrapper">
              <label htmlFor="password" className="visually-hidden">
                Nom{" "}
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Votre mot de passe"
                className="form-control"
              />
              <RiLockPasswordFill className="icon-btn" />
            </div>
            <div className="form-wrapper">
              <label htmlFor="phone_number" className="visually-hidden">
                phone_number{" "}
              </label>
              <input
                ref={phonenumberRef}
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="Votre numéro de téléphone"
                className="form-control"
              />
              <FaPhone className="icon-btn" />
            </div>
            <div className="form-wrapper">
              <label htmlFor="company_name" className="visually-hidden">
                Entreprise{" "}
              </label>
              <input
                ref={companyNameRef}
                type="text"
                id="company_name"
                name="company-name"
                placeholder="Entreprise"
                className="form-control"
              />
              <FaPhone className="icon-btn" />
            </div>
            <button type="submit" className="buttonRegister" onClick={Alert}>
              Créer mon compte
            </button>
            <p className="connexion">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="connect">
                Connexion
              </Link>
            </p>
          </form>
        </div>
      </div>
      <FooterUser />
    </>
  );
}

export default SignUp;
