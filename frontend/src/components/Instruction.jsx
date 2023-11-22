import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "../assets/validations.png";
import activity from "../assets/activity.png";
import list from "../assets/liste.png";
import "./Instruction.css";

function Instruction() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleCollapse = () => {
    setIsExpanded(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="main">
      <div className="card-parent">
        <div className={`card ${isExpanded ? "expanded" : ""}`}>
          <div className="card-image">
            <img src={validation} alt="" />
          </div>
          <div className="card-header">
            <h2 className="card-title">Preambule</h2>
          </div>
          <div className="card-list-container">
            <p>
              Cette charte concerne les acteurs du tourisme réceptif dans la
              Marne, elle a pour but de valoriser l’engagement vers un tourisme
              plus responsable. C’est aussi une charte de qualité puisqu’elle
              prend en compte les aménagements mis à la disposition des
              touristes.
            </p>
            <button
              type="button"
              className="btnToggle"
              onClick={isExpanded ? toggleCollapse : toggleExpansion}
            >
              {isExpanded ? "FERMER" : "Lire la suite"}
            </button>

            {isExpanded && (
              <>
                <p>
                  Cette charte concerne les acteurs du tourisme réceptif dans la
                  Marne, elle a pour but de valoriser l’engagement vers un
                  tourisme plus responsable. C’est aussi une charte de qualité
                  puisqu’elle prend en compte les aménagements mis à la
                  disposition des touristes.
                </p>
                <p>
                  Cette charte concerne les acteurs du tourisme réceptif dans la
                  Marne, elle a pour but de valoriser l’engagement vers un
                  tourisme plus responsable. C’est aussi une charte de qualité
                  puisqu’elle prend en compte les aménagements mis à la
                  disposition des touristes.
                </p>
              </>
            )}
          </div>
        </div>
        <div className={`card ${isExpanded ? "expanded" : ""}`}>
          <div className="card-image">
            <img src={list} alt="" />
          </div>
          <div className="card-header">
            <h2 className="card-title">Consignes d’auto-évaluation</h2>
          </div>
          <div className="card-list-container">
            <p>
              Pour chaque critère étudié, il faudra déterminer s'il est
              applicable à votre activité ou non. S'il n'est pas applicable,
              cochez la case correspondante, il sera ainsi écarté du champ
              d'analyse.
            </p>
            <button
              type="button"
              className="btnToggle"
              onClick={isOpen ? toggleClose : toggleOpen}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
            {isOpen && (
              <section className="section-text">
                <span>
                  Cette charte comporte des critères de trois natures :
                </span>
                <ul>
                  <li>
                    Les critères <span>obligatoires</span> qui sont
                    éliminatoires s’ils ne sont pas validés. Ce sont des
                    prérequis, ils ne rapportent donc pas de points pour valider
                    la charte.
                  </li>
                  <li>
                    Les critères <span>essentiels</span> concernent la plupart
                    du temps des gestes simples et applicables au quotidien.
                    Pour que l’activité soit considérée comme Eco-Tourisme, il
                    faudra valider au moins 80% du total de ces critères
                    arrondis à l’unité supérieure, complétés si besoin par les
                    critères optionnels validés.
                  </li>
                  <li>
                    Les critères <span>optionnels</span> concernent en partie
                    des aménagements qui sont plus contraignants ou coûteux à
                    mettre en place, ils ne peuvent donc pas être imposés mais
                    sont tout de même valorisés s’ils sont validés. Ils sont à
                    considérer comme des pistes d’amélioration dans une démarche
                    de progrès continus.
                  </li>
                </ul>
              </section>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={activity} alt="" />
          </div>
          <div className="card-header">
            <h2 className="card-title">Secteur d'activité</h2>
          </div>
          <div className="card-list-container">
            <p>
              En remplissant cette charte, le demandeur fait acte de candidature
              au label Ecotourisme de l’ADT. Après examen, l’ADT confirme par
              courrier la recevabilité des engagements."
            </p>
            <h4>
              Veuillez choisir votre secteur d'activité ci-dessous pour
              commencer :
            </h4>
            <div className="userButton">
              <Link to="/categories/1" className="userBtn">
                Hebergement
              </Link>
              <Link to="/categories/restaurant" className="userBtn">
                Restaurant
              </Link>
              <Link to="/categories/guide" className="userBtn">
                Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
