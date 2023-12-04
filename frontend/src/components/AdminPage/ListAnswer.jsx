import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AdminPage.css";

function ListAnswer() {
  const [userResponses, setUserResponses] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserResponses = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/users/${userId}/answers`
        );
        setUserResponses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserResponses();
  }, [userId]);

  // const essentialQuestions = questions.filter(
  //   (question) => question.mandatory_level === "Essentiel"
  // );
  // const optionQuestions = questions.filter(
  //   (question) => question.mandatory_level === "Optionnel"
  // );

  return (
    <main className="main-container">
      <section className="attendance">
        <table className="title-table">
          <tbody>
            <tr>
              <th className="header-cell">L'email de l'utilisateur </th>
              <th className="header-cell">
                {userResponses[0] && userResponses[0].email}
              </th>
            </tr>
            <tr>
              <td>Numéro de téléphone </td>
              <td>{userResponses[0] && userResponses[0].phone_number}</td>
            </tr>
          </tbody>
        </table>
        <div className="attendance-list">
          <h1>Résultat</h1>
          <div className="table-section">
            <table className="table">
              <thead className="table-head">
                <tr className="list-header">
                  <th className="head-table">Question</th>
                  <th className="head-table">Réponse</th>
                  {/* <th className="head-table">Choix Réponses</th> */}
                </tr>
              </thead>
              <tbody>
                {userResponses.map((response) => (
                  <tr key={response.id} className="list-table-answer">
                    <td className="central-answer1">
                      {response.questionContent}
                    </td>
                    <td className="central-answer1">{response.response}</td>

                    {/* <div className="input-answer">
                        <input
                          type="radio"
                          id={`answer${response.id}-atteint`}
                          name={`answer${response.id}`}
                          value="Atteint"
                        />
                        <label htmlFor={`answer${response.id}`}>Atteint</label>
                        <input
                          type="radio"
                          id={`answer${response.id}-not-atteint`}
                          name={`answer${response.id}`}
                          value="Non Atteint"
                        />
                        <label htmlFor={`answer${response.id}`}>
                          Non Atteint
                        </label>
                        <input
                          type="radio"
                          id={`answer${response.id}-non-concerne`}
                          name={`answer${response.id}`}
                          value="Non Concerné"
                        />
                        <label htmlFor={`answer${response.id}`}>
                          Non Concerné
                        </label>
                        <input
                          type="radio"
                          id={`answer${response.id}-ne-sais-pas`}
                          name={`answer${response.id}`}
                          value="Ne sais pas"
                        />
                        <label htmlFor={`answer${response.id}`}>
                          Ne sais pas
                        </label>
                      </div> */}
                  </tr>
                ))}
                {/* {users.map((user) => (
                  <tr key={user.id} className="central-answer">
                    <td className="central-answer1">{user.id}</td>
                    <td className="central-answer1">{user.firstname}</td>
                    <td className="central-answer1">{user.lastname}</td>
                    <td className="central-answer1">{user.company_name}</td>
                    <td className="central-answer1">{user.email}</td>
                    <td className="central-answer1">
                      <Link to={`/result/${user.id}`}>Voir</Link>
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListAnswer;
