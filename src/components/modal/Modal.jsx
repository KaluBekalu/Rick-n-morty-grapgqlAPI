import { useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Episode from "../episode/Episode";
import { RootContext } from "../../contexts/Context";
import "./Modal.css";

function Modal() {
  const { setShowModal, modalId } = useContext(RootContext);
  const [episodes, setEpisode] = useState([]);
  const [image, setImage] = useState();
  const [name, setName] = useState();

  const LOAD_MODAL_DATA = gql`
  query {
    character(id: ${modalId}) {
      name
      image
      episode {
        id
        episode
        air_date
      }
    }
  }
`;

  const { error, loading, data } = useQuery(LOAD_MODAL_DATA);

  useEffect(() => {
    if (data) {
      setName(data.character.name);
      setImage(data.character.image);
      setEpisode(data.character.episode);
    }
  }, [data]);

  return (
    <div className="modal">
      <div className="modal-wrapper">
        {name && (
          <div>
            <div className="modal-head">
              <div className="left">
                <img src={image} alt="avatar" />
                <h2>{name}</h2>
                <i className="far fa-heart"></i>
              </div>
              <div className="right">
                <button>{episodes.length} Episodes</button>
                <i
                  onClick={() => setShowModal(false)}
                  className="far fa-times-circle"
                ></i>
              </div>
            </div>
            <hr />
          </div>
        )}
        <div className="bottom">
          {episodes &&
            episodes.map((episode) => (
              <Episode key={episode.id} episode={episode} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
