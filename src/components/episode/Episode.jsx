import "./Episode.css";

function Episode() {
  return (
    <div className="episode">
      <h2>Pilot</h2>
      <div className="description">
        <div className="episode-number">
          <i className="fas fa-tv"></i>
          <div className="">
            <h3>SE01E01</h3>
            <p>Episode</p>
          </div>
        </div>
        <div className="episode-calendar">
          <i className="far fa-calendar-alt"></i>
          <div className="date">
            <h3>December 2, 2021</h3>
            <p>Air Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
