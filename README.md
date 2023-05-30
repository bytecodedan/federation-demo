This is an example of a GraphQL Federation. Federation allows us to have domain specific GraphQL servers but from the client
perspective it's single server in which they send requests to. Client requests are sent to a gateway which routes to the
appropriate subgragh.

In this example we have three components. Start each of the servers in a new terminal (the Gateway should be started last).


Subgraphs
- nest-graphql-rules (`npm run start:dev`)
- graphql-ms (`npm run start`)
Gateway
- nest-graphql-gateway (`npm run start:dev`)