import Rick_andMorty from "./Rick_and_Morty.svg";
import { useContext } from "react";
import { RootContext } from "../../contexts/Context";

import "./Header.css";

function Header() {
  const { setDarkMode, darkMode, setSearchKey } = useContext(RootContext);

  return (
    <div className="header">
      <img src={Rick_andMorty} className="logo" alt="logo" />
      <input
        type="text"
        name="search"
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        className={`searchBox ${darkMode && "searchbox-dark"}`}
        placeholder="Search"
      />
      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="mode"
      >
        {darkMode ? (
          <>
            <i className="fas fa-sun"></i> <p>Light Mode</p>
          </>
        ) : (
          <>
            <i className="fas fa-moon"></i> <p>DarkMode</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
