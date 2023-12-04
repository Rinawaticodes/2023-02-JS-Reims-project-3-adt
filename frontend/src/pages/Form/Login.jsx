import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";
import NavbarUser from "../../components/Header/NavbarUser";
import FooterUser from "../../components/Footer/FooterUser";
import logo from "../../assets/background_adt.jpeg";
import "./LoginForm.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"}/login`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.info("do you see cookie here ?", document.cookie);
        setToken(data.token);

        if (data.user.isAdmin) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      });
  };
  return (
    <>
      <NavbarUser />
      <div className="wrappers ">
        <div className="inners">
          <div className="images-holder">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <div className="form-wrappers">
              <input
                ref={emailRef}
                type="text"
                id="email"
                name="email"
                placeholder="Votre adresse mail"
                className="form-controls"
              />
              <MdEmail className="icon-btns" />
            </div>
            <div className="form-wrappers">
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Votre mot de passe"
                className="form-controls"
              />
              <RiLockPasswordFill className="icon-btns" />
            </div>
            <button type="submit" className="buttonRegisters">
              Se connecter
            </button>
          </form>
        </div>
      </div>
      <FooterUser />
    </>
  );
}
