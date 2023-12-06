import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  //   BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  //   BsFillBellFill,
} from "react-icons/bs";
import { IoOptionsSharp } from "react-icons/io5";
import "./AdminPage.css";

function MainDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`
      )
      .then((response) => {
        const uniqueUsers = response.data.reverse();

        setUsers(uniqueUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>TABLEAU DE BORD</h3>
      </div>
      <div className="main-cards-admin">
        <div className="grid-card">
          <div className="card-inner">
            <h3>BONJOUR</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1 className="name">Pierre</h1>
        </div>
        <div className="grid-card">
          <div className="card-inner">
            <h3>CATÉGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon1" />
          </div>
        </div>
        <div className="grid-card">
          <div className="card-inner">
            <h3>MANDATORY LEVEL</h3>
            <IoOptionsSharp className="card_icon2" />
          </div>
        </div>
      </div>
      <section className="attendance">
        <div className="attendance-list">
          <h1>Résultat</h1>
          <div className="table-section">
            <table className="table">
              <thead className="table-head">
                <tr className="list-header">
                  <th className="head-table">ID</th>
                  <th className="head-table">Prénom</th>
                  <th className="head-table">Nom</th>
                  <th className="head-table">Entreprise</th>
                  <th className="head-table">Email</th>
                  <th className="head-table">Réponse</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="central-answer">
                    <td className="central-answer1">{user.id}</td>
                    <td className="central-answer1">{user.firstname}</td>
                    <td className="central-answer1">{user.lastname}</td>
                    <td className="central-answer1">{user.company_name}</td>
                    <td className="central-answer1">{user.email}</td>
                    <td className="central-answer1">
                      <Link to={`/result/${user.id}`} className="link-table">
                        Voir
                      </Link>
                    </td>
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

export default MainDashboard;
