import { useEffect, useState, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_DATA } from "../../graphql/queries";
import { RootContext } from "../../contexts/Context";
import "./Card.css";

function Card() {
  const [gqldata, setgqlData] = useState([]);
  const { setShowModal } = useContext(RootContext);

  const { error, loading, data } = useQuery(LOAD_DATA);

  useEffect(() => {
    if (data) {
      setgqlData(data.characters.results);
    }
  }, [data]);

  return (
    <>
      {gqldata ? (
        gqldata.map((d) => {
          console.log(d.name);
          //   <Card data={d} />;
          return (
            <div className="card">
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
                <button
                  onClick={() => setShowModal(true)}
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
