import React, { useContext } from "react";
import NavbarUser from "./NavbarUser";
import FooterUser from "./FooterUser";
import Contact from "./Contact";
import { QuestionContext } from "../contexts/QuestionContext";
import pourcentage from "../services/pourcentage";
import "./Scoring.css";

function NotEligibleScore() {
  const { questions } = useContext(QuestionContext);

  const mandatoryQuestions = questions.filter(
    (question) => question.mandatory_level === "Obligatoire"
  );
  const essentialQuestions = questions.filter(
    (question) => question.mandatory_level === "Essentiel"
  );
  return (
    <div className="score">
      <NavbarUser />
      <section className="title-score">
        <h1>Merci d’avoir fait votre auto-évaluation.</h1>
        <p>Votre résultat : </p>
        <ul>
          <li>
            {" "}
            Pourcentage des questions répondues (Obligatoire) :{" "}
            {pourcentage(mandatoryQuestions)}%
          </li>
          <li>
            {" "}
            Pourcentage des questions répondues (Essentiel) :{" "}
            {pourcentage(essentialQuestions)}%
          </li>
          {/* <li>X/X QUESTIONS OPTIONNELLES </li> */}
        </ul>

        <p>
          Vous êtes encore en chemin. Saviez-vous que le plus difficile dans la
          transition est justement de vouloir l’enclencher ?
        </p>
        <h3>Et maintenant ⁉️</h3>
        <p>
          Nous vous invitons à partager ce résultat avec le conseiller
          écotourisme de l’Agence de Développement Touristique en nous laissant
          vos coordonnées pour être recontacté et travailler avec lui sur la
          transition de votre activité.
        </p>
        <h3>Pourquoi poursuivre ⁉️</h3>
        <p>
          Pour bénéficier de conseils 100% gratuits et personnalisés en vue
          d’intégrer le réseau de partenaires écotourisme et bénéficier :
        </p>
        <ul>
          <li>
            des actions de mise en réseau avec les autres établissements membres{" "}
          </li>
          <li>de promotion et de communication</li>
          <li>
            de conseils pour poursuivre votre démarche et aller plus loin{" "}
          </li>
        </ul>
        <Contact />
      </section>
      <FooterUser />
    </div>
  );
}

export default NotEligibleScore;
