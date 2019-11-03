import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

// const uri = 'https://api.graph.cool/simple/v1/cju6bfyqi5rrs0172cwfq137j'; // <-- add the URL of the GraphQL server here
const uri = 'http://dakar.lambla.eu:8080/graphql'; // <-- add the URL of the GraphQL server here
// const uri = 'http://localhost:8080/graphql'; // <-- add the URL of the GraphQL server here
// const uri = 'https://localhost:8443/graphql';
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
