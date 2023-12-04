import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarUser from "../../components/Header/NavbarUser";
import FooterUser from "../../components/Footer/FooterUser";
import legal from "../../assets/legals.png";
import "./Legal.css";

function LegalPage() {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const toggleShowLess = () => {
    setIsShowMore(false);
  };
  return (
    <>
      <NavbarUser />
      <div className="main-legal">
        <div className="card-container">
          <div className={`cards ${isShowMore ? "expanded" : ""}`}>
            <div className="cards-image">
              <img
                src={legal}
                alt="preambule"
                style={{ backgroundColor: "hsl(181, 35%, 46%)" }}
              />
            </div>
            <div className="cards-header">
              <h2 className="cards-title">Mentions légales</h2>
            </div>
            <div className="cards-list-container">
              <p>
                L’Agence Départementale du Tourisme de la Marne (ADT), dont le
                siège est situé 13 bis rue Carnot - 51000 CHÄLONS-EN-CHAMPAGNE,
                agit en qualité de responsable du traitement de vos données
                personnelles (conformément au Règlement n°2016/679 dit RGPD).
              </p>
              <p>
                L’objet de ce traitement consiste à établir, via le
                questionnaire ci-après, un état des lieux des pratiques et
                engagements en matière d’écotourisme auprès des professionnels
                touristiques de la Marne.
              </p>
              <p>
                Cette collecte repose sur l’intérêt légitime du responsable de
                traitement. Les destinataires de vos données sont les services
                habilités de l’ADT ainsi que nos partenaires institutionnels.
              </p>

              {isShowMore && (
                <>
                  <p>
                    Les données personnelles collectées sont conservées pour la
                    durée nécessaire à l’accompagnement du répondant. Vous
                    disposez d’un droit d’accès, de rectification, de
                    portabilité et d’effacement sur vos données ainsi qu’un
                    droit de limitation et d’opposition du traitement.
                  </p>
                  <p>
                    Vous avez la possibilité d’exercer vos droits sur simple
                    demande par courrier électronique à l’adresse suivante
                    p.labadie@tourisme-en-champagne.com. En cas de difficultés
                    liées à la gestion de vos données, vous avez la possibilité
                    de saisir la CNIL (www.cnil.fr).
                  </p>
                </>
              )}
              <button
                type="button"
                className="btnLegal"
                onClick={isShowMore ? toggleShowLess : toggleShowMore}
              >
                {isShowMore ? "Fermer" : "Lire la suite"}
              </button>
              <div className="legal-btn">
                <Link to="/" className="button-home">
                  Accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </>
  );
}

export default LegalPage;
