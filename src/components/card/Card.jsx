import { useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_DATA } from "../../graphql/queries";
import { RootContext } from "../../contexts/Context";
import Modal from "../modal/Modal";
import "./Card.css";

function Card() {
  const {
    setShowModal,
    setgqlData,
    gqldata,
    setmodalId,
    showModal,
    searchKey,
    darkMode,
  } = useContext(RootContext);

  const { error, loading, data } = useQuery(LOAD_DATA);
  useEffect(
    (v) => {
      if (data) setgqlData(data.characters.results);

      if (data) {
        if (searchKey) {
          setgqlData(
            data.characters.results.filter((i) => {
              if (i.name.toLowerCase().includes(searchKey)) return i;
            })
          );
        }
      }
    },
    [data, searchKey, setgqlData]
  );

  var likes = [];

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
            <div className={`card ${darkMode && "dark"}`} key={d.id}>
              <img src={d.image} alt="image_" />
              <div className="content">
                <div className="top">
                  <h2 className="card-title">{d.name}</h2>
                  <i
                    onClick={(e) => {
                      likes.push(e.target.id);
                    }}
                    id={d.id}
                    className="far fa-heart"
                  ></i>
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
