import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone, FaBuilding } from "react-icons/fa";
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
              // Validation for email format
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
              const prohibitedEmail = "pierre@adt.fr";

              if (
                !emailRef.current.value ||
                !emailRegex.test(emailRef.current.value) ||
                emailRef.current.value.toLowerCase() ===
                  prohibitedEmail.toLowerCase()
              ) {
                // eslint-disable-next-line no-alert
                alert("Veuillez saisir une adresse e-mail valide");
                return;
              }

              // Validation for phone number (must be a number)
              const phoneNumberRegex = /^\d+$/;
              if (
                !phonenumberRef.current.value ||
                !phoneNumberRegex.test(phonenumberRef.current.value)
              ) {
                // eslint-disable-next-line no-alert
                alert("Veuillez saisir un numéro de téléphone valide.");
                return;
              }

              // Validate other required fields (similar to previous example)
              if (
                !passwordRef.current.value ||
                !lastnameRef.current.value ||
                !firstnameRef.current.value ||
                !companyNameRef.current.value
              ) {
                // eslint-disable-next-line no-alert
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
              }

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
                  placeholder="Votre nom*"
                  className="form-control"
                  required
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
                  placeholder="Votre prénom*"
                  className="form-control"
                  required
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
                placeholder="Votre adresse mail*"
                className="form-control"
                required
              />
              <MdEmail className="icon-btn" />
            </div>
            <div className="form-wrapper">
              <label htmlFor="password" className="visually-hidden">
                Mot de passe{" "}
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Votre mot de passe*"
                className="form-control"
                required
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
                placeholder="Votre numéro de téléphone*"
                className="form-control"
                required
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
                placeholder="Entreprise*"
                className="form-control"
                required
              />
              <FaBuilding className="icon-btn" />
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
