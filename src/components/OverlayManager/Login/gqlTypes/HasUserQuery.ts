/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HasUserQuery
// ====================================================

export interface HasUserQuery_checkUser {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface HasUserQuery {
  checkUser: HasUserQuery_checkUser | null;
}

export interface HasUserQueryVariables {
  email: string;
}
