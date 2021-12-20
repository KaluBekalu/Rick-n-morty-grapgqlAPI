import { useEffect, useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_DATA } from "../../graphql/queries";
import { RootContext } from "../../contexts/Context";
import Modal from "../modal/Modal";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  const { setShowModal, setgqlData, gqldata, setmodalId, showModal } =
    useContext(RootContext);

  const { error, loading, data } = useQuery(LOAD_DATA);

  useEffect(() => {
    if (data) {
      setgqlData(data.characters.results);
    }
  }, [data]);

  const handleWatchEpisode = (e) => {
    setShowModal(true);
    setmodalId(e.target.name);
  };

  return (
    <>
      {showModal && <Modal />}
      {gqldata ? (
        gqldata.map((d) => {
          return (
            <div className="card" key={d.id}>
              <img src={d.image} alt="image_" />
              <div className="content">
                <div className="top">
                  <h2 className="card-title">{d.name}</h2>
                  <i className="far fa-heart"></i>
                </div>
                <div className="detail">
                  <div className="origin">
                    <p>Origin</p>
                    <h4>{d.origin.name}</h4>
                  </div>
                  <div className="species">
                    <p>Species</p>
                    <h4>{d.species}</h4>
                  </div>
                </div>
                {/* {console.log(d.id)} */}
                <button
                  onClick={handleWatchEpisode}
                  name={d.id}
                  className="episode-btn"
                >
                  Watch Episodes <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2 ClassName="Loading">Loading...</h2>
      )}
    </>
  );
}

export default Card;
