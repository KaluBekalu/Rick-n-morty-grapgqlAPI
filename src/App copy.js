import { useState, useEffect, createContext } from "react";
import Modal from "./components/modal/Modal2";
import Home from "./components/home/Home";
import { RootContext } from "./contexts/Context";
import { Route, Switch, Link } from "react-router-dom";

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
  const [showModal, setShowModal] = useState(false);
  const [modalId, setmodalId] = useState();
  const [modalData, setModaldata] = useState([]);

  return (
    <div className="App">
      <RootContext.Provider
        value={{
          showModal,
          modalData,
          modalId,
          setmodalId,
          setShowModal,
          setModaldata,
        }}
      >
        <ApolloProvider client={client}>
          <Link
            to={{
              pathname: "/modal/1",
              state: { modal: true },
            }}
          >
            Open Modal
          </Link>
          <Switch>
            {/* <Modal /> */}
            <Route exact path="/" component={Home} />
          </Switch>
        </ApolloProvider>
      </RootContext.Provider>
    </div>
  );
}

export default App;
