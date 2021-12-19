import { useEffect, useState, useContext } from "react";
import { RootContext } from "../../contexts/Context";
import "./Card.css";

function Card({ data }) {
  const { setShowModal } = useContext(RootContext);

  return (
    <div className="card">
      <img src="/Rick_Sanchez.png" alt="image_" />
      <div className="content">
        <div className="top">
          <h1 className="card-title">{data.name}</h1>
          <i className="far fa-heart"></i>
        </div>
        <div className="detail">
          <div className="origin">
            <p>Origin</p>
            <h4>Earth (C-137)</h4>
          </div>
          <div className="species">
            <p>Species</p>
            <h4>Human</h4>
          </div>
        </div>
        <button onClick={() => setShowModal(true)} className="episode-btn">
          Watch Episodes <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
