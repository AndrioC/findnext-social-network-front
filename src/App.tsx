import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloClient } from "./graphql/apollo/client";
import { AuthProvider } from "./hooks/auth";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Routes />
      </ApolloProvider>
    </AuthProvider>
  );
};

export default App;
