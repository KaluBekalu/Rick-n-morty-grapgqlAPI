import Rick_andMorty from "./Rick_and_Morty.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={Rick_andMorty} className="logo" alt="logo" />
      <input type="text" name="search" id="searchBox" placeholder="Search" />
      <div className="mode">
        <i className="fas fa-moon"></i> <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
