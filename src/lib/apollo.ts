import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4olx0280c7t01ywff6k1l73/master',
    cache: new InMemoryCache()
})