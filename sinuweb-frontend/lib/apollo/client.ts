import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://backend:8000/api/graphql/",
        cache: new InMemoryCache(),
        // defaultOptions: defaultOptions
    });
};

export default createApolloClient;