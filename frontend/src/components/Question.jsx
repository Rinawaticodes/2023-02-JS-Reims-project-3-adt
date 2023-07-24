import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import pourcentage from "../services/pourcentage";
import { QuestionContext } from "../contexts/QuestionContext";
import "./Question.css";

function Question() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { questions, setQuestions, updateQuestionResponse } =
    useContext(QuestionContext);

  const handleNextPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) + 1}`);
  };

  const handlePreviousPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) - 1}`);
  };

  useEffect(() => {
    const knownCategory = questions.find(
      (question) => question.categoryId === parseInt(categoryId, 10)
    );

    if (!knownCategory) {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/questions`
        )
        .then((response) => {
          setQuestions([...questions, ...response.data]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const mandatoryQuestions = questions.filter(
    (question) => question.mandatory_level === "Obligatoire"
  );
  const essentialQuestions = questions.filter(
    (question) => question.mandatory_level === "Essentiel"
  );
  const optionQuestions = questions.filter(
    (question) => question.mandatory_level === "Optionnel"
  );

  const countCriteriaMet = questions.filter(
    (question) => question.response === "Atteint"
  ).length;
  const criteriumNotReached = questions.filter(
    (question) => question.response === "Non Atteint"
  ).length;
  const countNotApplicable = questions.filter(
    (question) => question.response === "Non Concerné"
  ).length;
  const countUnknown = questions.filter(
    (question) => question.response === "Ne sais pas"
  ).length;

  const scoreToNextPage = () => {
    const unknown = mandatoryQuestions.find(
      (question) => question.response === "Ne sais pas"
    );

    if (unknown) {
      return "/resultat/inconnu";
    }

    const mandatoryScore = parseInt(pourcentage(mandatoryQuestions), 10);

    if (mandatoryScore < 100) {
      return "/resultat/non";
    }

    const essentialScore = parseInt(pourcentage(essentialQuestions), 10);

    if (essentialScore < 80) {
      const unknownEssential = essentialQuestions.find(
        (question) => question.response === "Ne sais pas"
      );

      if (unknownEssential) {
        return "/resultat/inconnu";
      }

      return "/resultat/non";
    }

    return "/resultat/oui";
  };

  const test = () => {
    for (let i = 0; i < questions.length; i += 1) {
      // if (questions[i].mandatory_level === "Obligatoire") {
      questions[i].response = "Atteint";

      // console.log(i);
    }
  };
  return (
    <section className="surveyQuestion">
      <button type="button" onClick={test} className="test">
        Cochez
      </button>
      <div className="small-container" />
      {questions
        .filter(
          (question) =>
            parseInt(question.category_id, 10) === parseInt(categoryId, 10)
        )
        .map((question) => (
          <div key={question.id} className="questions">
            <div className={`questionList questionText${question.id}`}>
              <p className="questionContent">
                {question.content}
                {question.tooltip_content != null && (
                  <AiOutlineInfoCircle color="blue" />
                )}
              </p>
              <p className="mandatoryLevel">{question.mandatory_level}</p>
            </div>
            {question.tooltip_content != null && (
              <Tooltip
                className="tooltip"
                anchorSelect={`.questionText${question.id}`}
              >
                <div>
                  <p>{question.tooltip_content}</p>
                </div>
              </Tooltip>
            )}

            <div className="answer">
              <input
                type="radio"
                id={`answer${question.id}-atteint`}
                name={`answer${question.id}`}
                value="Atteint"
                onChange={() => updateQuestionResponse(question, "Atteint")}
                checked={!question.response || question.response === "Atteint"}
              />
              <label
                htmlFor={`answer${question.id}-atteint`}
                className="answerChoice"
              >
                Atteint
              </label>
              <input
                type="radio"
                id={`answer${question.id}-not-atteint`}
                name={`answer${question.id}`}
                value="Non Atteint"
                onChange={() => updateQuestionResponse(question, "Non Atteint")}
                checked={question.response === "Non Atteint"}
              />
              <label
                htmlFor={`answer${question.id}-not-atteint`}
                className="answerChoice"
              >
                Non Atteint
              </label>

              <input
                type="radio"
                id={`answer${question.id}-non-concerne`}
                name={`answer${question.id}`}
                value="Non Concerné"
                onChange={() =>
                  updateQuestionResponse(question, "Non Concerné")
                }
                checked={question.response === "Non Concerné"}
              />
              <label
                htmlFor={`answer${question.id}-non-concerne`}
                className="answerChoice"
              >
                Non Concerné
              </label>
              <input
                type="radio"
                id={`answer${question.id}-ne-sais-pas`}
                name={`answer${question.id}`}
                value="Ne sais pas"
                onChange={() => updateQuestionResponse(question, "Ne sais pas")}
                checked={question.response === "Ne sais pas"}
              />
              <label
                htmlFor={`answer${question.id}-ne-sais-pas`}
                className="answerChoice"
              >
                Ne sais pas
              </label>
            </div>
          </div>
        ))}
      <div className="buttonContainer">
        {parseInt(categoryId, 10) < 6 && (
          <button
            type="button"
            onClick={handleNextPage}
            className="questionBtn"
          >
            Suivant
          </button>
        )}

        {parseInt(categoryId, 10) === 6 && (
          <button
            type="button"
            className="questionBtn"
            onClick={() => navigate(scoreToNextPage())}
          >
            Terminer
          </button>
        )}

        {parseInt(categoryId, 10) > 1 && (
          <button
            type="button"
            className="questionBtn"
            onClick={handlePreviousPage}
          >
            Précédent
          </button>
        )}
      </div>
      <div className="counters">
        <p>Nombre de critères atteints : {countCriteriaMet}</p>
        <p>Nombre de critères non atteints : {criteriumNotReached}</p>
        <p>Nombre de critères non concernés : {countNotApplicable}</p>
        <p>Nombre de critères inconnus : {countUnknown}</p>
        <p>
          Pourcentage des questions répondues (Obligatoire) :
          {pourcentage(mandatoryQuestions)}%
        </p>
        <p>
          Pourcentage des questions répondues (Essentiel) :
          {pourcentage(essentialQuestions)}%
        </p>
        <p>
          Pourcentage des questions répondues (Optionnel) :
          {pourcentage(optionQuestions)}%
        </p>
      </div>
    </section>
  );
}

export default Question;
