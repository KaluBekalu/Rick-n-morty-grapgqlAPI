import { useState, useEffect, createContext } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Modal from "./components/modal/Modal";
import { RootContext } from "./contexts/Context";

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
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <RootContext.Provider value={{ showModal, setShowModal }}>
        <ApolloProvider client={client}>
          {showModal && <Modal />}
          <Header />
          <div className="container">
            <Card />
          </div>
        </ApolloProvider>
      </RootContext.Provider>
    </div>
  );
}

export default App;
