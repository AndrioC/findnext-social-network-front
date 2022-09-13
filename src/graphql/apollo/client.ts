import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// export const apolloClient = new ApolloClient({
//   uri: process.env.REACT_APP_API_URL,
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { header }) => {
  return {
    headers: {
      ...header,
      authorization: localStorage.getItem("token"),
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
