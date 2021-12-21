import { useState } from "react";
import Home from "./components/home/Home";
import { RootContext } from "./contexts/Context";
import { Route, Routes } from "react-router-dom";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(message);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [gqldata, setgqlData] = useState([]);
  const [Liked, setLiked] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalId, setmodalId] = useState();
  const [modalData, setModaldata] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className={`App ${darkMode && "dark"}`}>
      <RootContext.Provider
        value={{
          darkMode,
          showModal,
          modalData,
          modalId,
          gqldata,
          Liked,
          searchKey,
          setSearchKey,
          setLiked,
          setDarkMode,
          setgqlData,
          setmodalId,
          setShowModal,
          setModaldata,
        }}
      >
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ApolloProvider>
      </RootContext.Provider>
    </div>
  );
}

export default App;
