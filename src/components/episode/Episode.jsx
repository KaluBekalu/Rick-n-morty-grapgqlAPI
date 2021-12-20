import "./Episode.css";

function Episode({ episode }) {
  return (
    <div className="episode">
      <h2>Pilot</h2>
      <div className="description">
        <div className="episode-number">
          <i className="fas fa-tv"></i>
          <div className="">
            <h3>{episode.episode}</h3>
            <p>Episode</p>
          </div>
        </div>
        <div className="episode-calendar">
          <i className="far fa-calendar-alt"></i>
          <div className="date">
            <h3>{episode.air_date}</h3>
            <p>Air Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
