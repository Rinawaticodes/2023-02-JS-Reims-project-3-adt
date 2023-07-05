import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Question.css";

function Question() {
  const [questions, setQuestions] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/categories/${categoryId}/questions`
      )
      .then((response) => setQuestions(response.data))
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  /* function input */
  const handleResponseChange = (questionId, response) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, response };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };
  /* function button */
  const handleNextPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) + 1}`);
  };

  const handlePreviousPage = () => {
    navigate(`/categories/${parseInt(categoryId, 10) - 1}`);
  };

  return (
    <section className="surveyQuestion">
      <div className="small-container" />
      {questions
        .filter((question) => {
          return (
            parseInt(question.category_id, 10) === parseInt(categoryId, 10)
          );
        })
        .map((question) => (
          <div className="questions">
            <div key={question.id} className="questionList">
              <p className="questionContent">{question.content}</p>
              <p className="mandatoryLevel">{question.mandatory_level}</p>
            </div>
            <div className="answer">
              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="Atteint"
                checked={question.response === "Atteint"}
                onChange={() => handleResponseChange(question.id, "Atteint")}
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Atteint
              </label>
              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="No Atteint"
                checked={question.response === "Not Atteint"}
                onChange={() =>
                  handleResponseChange(question.id, "Not Atteint")
                }
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Non Atteint
              </label>
              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="ne sais pas"
                checked={question.response === "Non Concerné"}
                onChange={() =>
                  handleResponseChange(question.id, "Non Concerné")
                }
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Non Concerné
              </label>

              <input
                type="checkbox"
                required
                id={`answer${question.id}`}
                name={`answer${question.id}`}
                value="ne sais pas"
                checked={question.response === "Ne sais pas"}
                onChange={() =>
                  handleResponseChange(question.id, "Ne sais pas")
                }
              />
              <label htmlFor={`answer${question.id}`} className="answerChoice">
                Ne sais pas
              </label>
            </div>
          </div>
        ))}
      <div className="buttonContainer">
        {parseInt(categoryId, 10) < 6 && (
          <div className="questionBtnPrevious">
            <button
              type="button"
              className="nextButton"
              onClick={handleNextPage}
            >
              Suivant
            </button>
          </div>
        )}

        {parseInt(categoryId, 10) === 6 && (
          <div className="questionBtnPrevious">
            <button
              type="button"
              className="nextButton"
              onClick={handleNextPage}
            >
              Terminer
            </button>
          </div>
        )}
        {parseInt(categoryId, 10) > 1 && (
          <div className="questionBtnNext">
            <button
              type="button"
              className="previousButton"
              onClick={handlePreviousPage}
            >
              Précédent
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Question;
