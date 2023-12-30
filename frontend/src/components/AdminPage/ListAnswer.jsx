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
                </tr>
              </thead>
              <tbody>
                {userResponses.map((response) => (
                  <tr key={response.id} className="list-table-answer">
                    <td className="central-answer1">
                      {response.questionContent}
                    </td>
                    <td className="central-answer1">{response.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListAnswer;
