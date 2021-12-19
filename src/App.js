import { useState, createContext } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Modal from "./components/modal/Modal";
import { RootContext } from "./contexts/Context";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <RootContext.Provider value={{ showModal, setShowModal }}>
        {showModal && <Modal />}
        <Header />
        <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </RootContext.Provider>
    </div>
  );
}

export default App;
