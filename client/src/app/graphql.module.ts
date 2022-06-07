import { NgModule, isDevMode } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// console.log('isDev', isDevMode());
// const uri = isDevMode() ? 'http://localhost:5000/graphql' : ''; //TODO: Add Live url of you app backend
// const uri = isDevMode() ? 'http://localhost:5000/graphql' : 'http://minmekaniker.herokuapp.com:5000/graphql'; //TODO: Add Live url of you app backend
const uri = 'http://18.197.140.199:5000/graphql';
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    // {
    //                          // @ts-ignore
    //                          dataIdFromObject: object => object.nodeId || null,
    //                        }
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
