import gql from "graphql-tag";

import { TypedMutation } from "@temp/core/mutations";
import { TypedQuery } from "@temp/core/queries";
import {
  RegisterAccount,
  RegisterAccountVariables,
} from "./gqlTypes/RegisterAccount";

import { HasUserQuery, HasUserQueryVariables } from "./gqlTypes/HasUserQuery";

const accountRegisterMutation = gql`
  mutation RegisterAccount(
    $email: String!
    $password: String!
    $redirectUrl: String!
    $firstName: String!
    $lastName: String!
  ) {
    accountRegister(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        redirectUrl: $redirectUrl
      }
    ) {
      errors {
        field
        message
      }
      requiresConfirmation
    }
  }
`;

export const TypedAccountRegisterMutation = TypedMutation<
  RegisterAccount,
  RegisterAccountVariables
>(accountRegisterMutation);

const hasUserQuery = gql`
  query HasUserQuery($email: String!) {
    checkUser(email: $email) {
      id
    }
  }
`;

export const TypedHasUserQuery = TypedQuery<
  HasUserQuery,
  HasUserQueryVariables
>(hasUserQuery);
