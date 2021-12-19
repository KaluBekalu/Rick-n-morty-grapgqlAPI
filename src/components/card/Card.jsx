import "./Card.css";
import { useEffect, useState, useContext } from "react";
import { RootContext } from "../../contexts/Context";

function Card() {
  const { setShowModal } = useContext(RootContext);

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/graphql", {
  //     method: "POST",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       query: `{
  //         characters {
  //         results {
  //           name
  //           origin{
  //             name
  //           }
  //           species
  //         }
  //       }
  //     }`,
  //     }),
  //   })
  //     .then((result) => result.json())
  //     .then((data) => {
  //       const res = data.data.characters;
  //       setData(res);
  //       console.log(res);
  //     });
  // }, []);

  return (
    <div className="card">
      <img src="/Rick_Sanchez.png" alt="image_" />
      <div className="content">
        <div className="top">
          <h1 className="card-title">Rick Sanchez</h1>
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
