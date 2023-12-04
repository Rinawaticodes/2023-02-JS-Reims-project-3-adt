import React, { useContext } from "react";
import { FaCircleCheck, FaCommentDots } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { QuestionContext } from "../../contexts/QuestionContext";
import NavbarUser from "../Header/NavbarUser";
import FooterUser from "../Footer/FooterUser";
import Contact from "./Contact";

import "./Score.css";

function ScoreThree() {
  const { questions } = useContext(QuestionContext);

  const mandatoryQuestions = questions.filter(
    (question) => question.mandatory_level === "Obligatoire"
  );
  const essentialQuestions = questions.filter(
    (question) => question.mandatory_level === "Essentiel"
  );
  const optionQuestions = questions.filter(
    (question) => question.mandatory_level === "Optionnel"
  );
  const pourcentage = (questionList) => {
    const divisor =
      questionList.length -
      questionList.filter((question) => question.response === "Non Concerné")
        .length;

    if (divisor === 0) {
      return 0;
    }
    return (
      (100 *
        questionList.filter((question) => question.response === "Atteint")
          .length) /
      divisor
    ).toFixed();
  };
  return (
    <>
      <NavbarUser />
      <div className="wrapper-score">
        <div className="card-wrapper">
          <section className="card-title-score">
            <h3>Merci d’avoir fait votre auto-évaluation.</h3>
            <p>
              Il semble que vous n’ayez pas pu répondre à toutes les questions
              nécessaires au calcul du résultat :{" "}
            </p>
          </section>
          <div className="score-one">
            <section className="score-unit">
              <FaCircleCheck style={{ color: "blue" }} />
              <p>
                {" "}
                Pourcentage des questions répondues (Obligatoire) :{" "}
                <span style={{ color: "blue" }}>
                  {pourcentage(mandatoryQuestions)}%
                </span>
              </p>
            </section>
            <section className="score-unit">
              <FaThumbsUp style={{ color: "green" }} />
              <p>
                Pourcentage des questions répondues (Essentiel) :
                <span style={{ color: "green" }}>
                  {pourcentage(essentialQuestions)}%
                </span>
              </p>
            </section>
            <section className="score-unit">
              <FaCommentDots style={{ color: "red" }} />
              <p>
                Pourcentage des questions répondues (Optionnel) :{" "}
                <span style={{ color: "red" }}>
                  {pourcentage(optionQuestions)}%
                </span>
              </p>
            </section>
          </div>
          <section className="score-text">
            <h2>LISTE DES QUESTIONS À “NE SAIT PAS” </h2>
            <p>
              Vous êtes encore en chemin. Ce serait dommage de vous arrêter là,
              d’ailleurs, peut-être même que les critères auxquels vous n’avez
              pu répondre sont déjà remplis. Sans le savoir, vous pourriez
              intégrer le réseau de partenaires écotourisme et bénéficier :
            </p>
            <ul className="score-action">
              <li>
                des actions de mise en réseau avec les autres établissements
                membres{" "}
              </li>
              <li>de promotion et de communication</li>
              <li>
                de conseils pour poursuivre votre démarche et aller plus loin{" "}
              </li>
            </ul>
            <h4>Et maintenant ⁉️</h4>
            <p>
              Nous vous invitons à partager ce résultat avec le conseiller
              écotourisme de l’Agence de Développement Touristique en nous
              laissant vos coordonnées pour être recontacté et travailler avec
              lui sur la transition de votre activité.
            </p>
            <Contact />
          </section>
        </div>
      </div>
      <FooterUser />
    </>
  );
}

export default ScoreThree;
