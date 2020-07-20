import { ApolloClient, MutationOptions as ApolloMutationOptions } from 'apollo-client';

import * as Address from './address';
import * as Auth from './auth';
import { AccountUpdate, AccountUpdateVariables } from './gqlTypes/AccountUpdate';
import { CreateUserAddress, CreateUserAddressVariables } from './gqlTypes/CreateUserAddress';
import { DeleteUserAddress, DeleteUserAddressVariables } from './gqlTypes/DeleteUserAddress';
import { PasswordChange, PasswordChangeVariables } from './gqlTypes/PasswordChange';
import { ProductCreateVariables } from './gqlTypes/ProductCreate';
import {
    ProductUpdateMetadata, ProductUpdateMetadataVariables
} from './gqlTypes/ProductUpdateMetadata';
import {
    SetCustomerDefaultAddress, SetCustomerDefaultAddressVariables
} from './gqlTypes/SetCustomerDefaultAddress';
import { SetPassword, SetPasswordVariables } from './gqlTypes/SetPassword';
import { TokenAuth, TokenAuthVariables } from './gqlTypes/TokenAuth';
import { UpdateUserAddress, UpdateUserAddressVariables } from './gqlTypes/UpdateUserAddress';
import * as Product from './product';
import * as User from './user';

export type MutationOptions<TData, TVariables> = Omit<
  ApolloMutationOptions<TData, TVariables>,
  "mutation"
>;

// TODO: Add ability to pass custom fragments to mutations
export const MUTATIONS = {
  AccountUpdate: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<AccountUpdate, AccountUpdateVariables>
  ) =>
    client.mutate({
      mutation: User.accountUpdate,
      ...options,
    }),
  AddressTypeUpdate: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<
      SetCustomerDefaultAddress,
      SetCustomerDefaultAddressVariables
    >
  ) =>
    client.mutate({
      mutation: Address.setCustomerDefaultAddress,
      ...options,
    }),
  CreateUserAddress: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<CreateUserAddress, CreateUserAddressVariables>
  ) =>
    client.mutate({
      mutation: Address.createUserAddress,
      ...options,
    }),
  DeleteUserAddress: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<DeleteUserAddress, DeleteUserAddressVariables>
  ) =>
    client.mutate({
      mutation: Address.deleteUserAddress,
      ...options,
    }),
  PasswordChange: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<PasswordChange, PasswordChangeVariables>
  ) =>
    client.mutate({
      mutation: User.changeUserPassword,
      ...options,
    }),
  SetPassword: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<SetPassword, SetPasswordVariables>
  ) =>
    client.mutate({
      mutation: User.setPassword,
      ...options,
    }),
  TokenAuth: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<TokenAuth, TokenAuthVariables>
  ) =>
    client.mutate({
      mutation: Auth.tokenAuthMutation,
      ...options,
    }),
  UpdateUserAddress: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<UpdateUserAddress, UpdateUserAddressVariables>
  ) =>
    client.mutate({
      mutation: Address.updateUserAddress,
      ...options,
    }),

  /** custom lk */
  CreateSimpleProduct: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<any, ProductCreateVariables>
  ) =>
    client.mutate({
      mutation: Product.createSimpleProduct,
      ...options,
    }),

  ProductUpdateMetadata: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: MutationOptions<ProductUpdateMetadata, ProductUpdateMetadataVariables>
  ) =>
    client.mutate({
      mutation: Product.createSimpleProduct,
      ...options,
    }),
};

export type MUTATIONS = typeof MUTATIONS;
