/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveContactDetailsToDatabase
// ====================================================

export interface SaveContactDetailsToDatabase_createContactWhenGeohashAvailable {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId: string | null;
}

export interface SaveContactDetailsToDatabase {
  __typename: 'Mutation';
  /**
   * Creates a single `ContactWhenGeohashAvailable`.
   */
  createContactWhenGeohashAvailable: SaveContactDetailsToDatabase_createContactWhenGeohashAvailable | null;
}

export interface SaveContactDetailsToDatabaseVariables {
  geohash: string;
  email: string;
}
