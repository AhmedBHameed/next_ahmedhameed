import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

export type GenerateTokens = {
  __typename?: 'GenerateTokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  userRole: Scalars['String'];
};

export enum UserRoles {
  User = 'USER',
  Admin = 'ADMIN',
  Publisher = 'PUBLISHER'
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Username = {
  __typename?: 'Username';
  first?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
};

export type LoginDataInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UsernameInput = {
  first?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<UsernameInput>;
};

export type VerificationUserInput = {
  userId: Scalars['ID'];
  verificationId: Scalars['String'];
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  name?: Maybe<UsernameInput>;
  gender?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  status: UserStatus;
  role: UserRoles;
  address?: Maybe<AddressInput>;
};

export type ResetPasswordInput = {
  userId: Scalars['String'];
  verificationId: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Username>;
  email: Scalars['String'];
  status?: Maybe<UserStatus>;
  verificationId?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoles>;
  address?: Maybe<Address>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Publisher = {
  __typename?: 'Publisher';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Username>;
};

export type Countries = {
  __typename?: 'Countries';
  country: Scalars['String'];
  abbreviation: Scalars['String'];
};

export type Cities = {
  __typename?: 'Cities';
  name: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  state: Scalars['String'];
  city: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  subdivision?: Maybe<Scalars['String']>;
  lane?: Maybe<Scalars['String']>;
  house?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  state: Scalars['String'];
  city: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  subdivision?: Maybe<Scalars['String']>;
  lane?: Maybe<Scalars['String']>;
  house?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type UserAddresses = {
  __typename?: 'UserAddresses';
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PackageLocationInput = {
  packageCode: Scalars['String'];
  locationName?: Maybe<AddressInput>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['ID']>;
  shippedByUserId?: Maybe<Scalars['String']>;
  shippedByUser?: Maybe<Publisher>;
  packageCode?: Maybe<Scalars['String']>;
  locationName?: Maybe<Address>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PackageInput = {
  packageCode: Scalars['String'];
  senderName: Scalars['String'];
  senderPhone: Scalars['String'];
  senderEmail?: Maybe<Scalars['String']>;
  destinationAddress: AddressInput;
  recipientName: Scalars['String'];
  recipientPhone: Scalars['String'];
  sourceAddress: AddressInput;
  packageType?: Maybe<Scalars['String']>;
  packageNumber?: Maybe<Scalars['String']>;
  packageNotes?: Maybe<Scalars['String']>;
  shippingCost?: Maybe<Scalars['String']>;
};

export enum PackageStatus {
  Incomplete = 'INCOMPLETE',
  ReadyForShipping = 'READY_FOR_SHIPPING',
  UnderShipping = 'UNDER_SHIPPING',
  Delivered = 'DELIVERED'
}

export type Package = {
  __typename?: 'Package';
  id?: Maybe<Scalars['ID']>;
  packageCode?: Maybe<Scalars['String']>;
  status?: Maybe<PackageStatus>;
  senderName?: Maybe<Scalars['String']>;
  senderPhone?: Maybe<Scalars['String']>;
  senderEmail?: Maybe<Scalars['String']>;
  recipientSignature?: Maybe<Scalars['String']>;
  sourceAddress?: Maybe<Address>;
  recipientName?: Maybe<Scalars['String']>;
  recipientPhone?: Maybe<Scalars['String']>;
  destinationAddress?: Maybe<Address>;
  packageType?: Maybe<Scalars['String']>;
  packageNumber?: Maybe<Scalars['String']>;
  packageNotes?: Maybe<Scalars['String']>;
  shouldBeArchived?: Maybe<Scalars['Boolean']>;
  shippedByUserId?: Maybe<Scalars['String']>;
  shippedByUser?: Maybe<Publisher>;
  shippingCost?: Maybe<Scalars['String']>;
  locationHistory?: Maybe<Array<Maybe<Location>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  generateTokens?: Maybe<GenerateTokens>;
  countries?: Maybe<Array<Maybe<Countries>>>;
  cities?: Maybe<Array<Maybe<Cities>>>;
  publishers?: Maybe<Array<Maybe<Publisher>>>;
  packages?: Maybe<Array<Maybe<Package>>>;
  searchPackages?: Maybe<Array<Maybe<Package>>>;
  findPackageByCode?: Maybe<Package>;
  publisherPackages?: Maybe<Array<Maybe<Package>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchUsersArgs = {
  search: Scalars['String'];
};


export type QueryGenerateTokensArgs = {
  userData: LoginDataInput;
};


export type QueryCitiesArgs = {
  country: Scalars['String'];
};


export type QuerySearchPackagesArgs = {
  search: Scalars['String'];
};


export type QueryFindPackageByCodeArgs = {
  packageCode: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  verifyUser?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  deleteUser?: Maybe<Message>;
  updateUser?: Maybe<User>;
  createUser?: Maybe<Message>;
  forgotPassword?: Maybe<Message>;
  createPackage?: Maybe<Package>;
  assignPackageTo?: Maybe<Package>;
  updatePackage?: Maybe<Package>;
  deliverPackage?: Maybe<Scalars['ID']>;
  createPackageLocation?: Maybe<Location>;
};


export type MutationVerifyUserArgs = {
  userData: VerificationUserInput;
};


export type MutationResetPasswordArgs = {
  userData: ResetPasswordInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  userData: UpdateUserInput;
};


export type MutationCreateUserArgs = {
  userData: CreateUserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationCreatePackageArgs = {
  newPackage: PackageInput;
};


export type MutationAssignPackageToArgs = {
  publisherId: Scalars['ID'];
  packageCode: Scalars['ID'];
};


export type MutationUpdatePackageArgs = {
  updatePackage: PackageInput;
};


export type MutationDeliverPackageArgs = {
  packageCode: Scalars['ID'];
  signatureSrc: Scalars['String'];
};


export type MutationCreatePackageLocationArgs = {
  location: PackageLocationInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  trackMyPackage?: Maybe<Location>;
  trackPublishers?: Maybe<Array<Maybe<Location>>>;
};


export type SubscriptionTrackMyPackageArgs = {
  subId: Scalars['String'];
};

export type GenerateTokensQueryVariables = Exact<{
  userData: LoginDataInput;
}>;


export type GenerateTokensQuery = (
  { __typename?: 'Query' }
  & { generateTokens?: Maybe<(
    { __typename?: 'GenerateTokens' }
    & Pick<GenerateTokens, 'accessToken' | 'refreshToken' | 'userRole'>
  )> }
);


export const GenerateTokensDocument = gql`
    query GenerateTokens($userData: LoginDataInput!) {
  generateTokens(userData: $userData) {
    accessToken
    refreshToken
    userRole
  }
}
    `;

/**
 * __useGenerateTokensQuery__
 *
 * To run a query within a React component, call `useGenerateTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateTokensQuery({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useGenerateTokensQuery(baseOptions: Apollo.QueryHookOptions<GenerateTokensQuery, GenerateTokensQueryVariables>) {
        return Apollo.useQuery<GenerateTokensQuery, GenerateTokensQueryVariables>(GenerateTokensDocument, baseOptions);
      }
export function useGenerateTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateTokensQuery, GenerateTokensQueryVariables>) {
          return Apollo.useLazyQuery<GenerateTokensQuery, GenerateTokensQueryVariables>(GenerateTokensDocument, baseOptions);
        }
export type GenerateTokensQueryHookResult = ReturnType<typeof useGenerateTokensQuery>;
export type GenerateTokensLazyQueryHookResult = ReturnType<typeof useGenerateTokensLazyQuery>;
export type GenerateTokensQueryResult = Apollo.QueryResult<GenerateTokensQuery, GenerateTokensQueryVariables>;