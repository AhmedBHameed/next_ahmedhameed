import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
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

export type Login = {
  __typename?: 'Login';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  userRole: Scalars['String'];
};

export enum UserRoles {
  User = 'USER',
  Admin = 'ADMIN',
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
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

export type Signup = {
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

export type File = {
  __typename?: 'File';
  filename?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  mimtype?: Maybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  id?: Maybe<Scalars['ID']>;
  file?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
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

export type ContactInput = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
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

export enum CategoryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type AddCategoryInput = {
  id: Scalars['ID'];
  imgSrc: Scalars['String'];
  name: Scalars['String'];
  enDescription: Scalars['String'];
  arDescription: Scalars['String'];
  status: CategoryStatus;
};

export type UpdateCategoryInput = {
  id: Scalars['ID'];
  imgSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enDescription?: Maybe<Scalars['String']>;
  arDescription?: Maybe<Scalars['String']>;
  status?: Maybe<CategoryStatus>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['ID']>;
  imgSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  enDescription?: Maybe<Scalars['String']>;
  arDescription?: Maybe<Scalars['String']>;
  status?: Maybe<CategoryStatus>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  profile?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  login?: Maybe<Login>;
  logout?: Maybe<Message>;
  documents?: Maybe<Array<Maybe<Document>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QuerySearchUsersArgs = {
  search: Scalars['String'];
};

export type QueryLoginArgs = {
  userData: LoginDataInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  verifyUser?: Maybe<Message>;
  resetPassword?: Maybe<Message>;
  deleteUser?: Maybe<Message>;
  updateUser?: Maybe<User>;
  signup?: Maybe<Message>;
  forgotPassword?: Maybe<Message>;
  contactMe?: Maybe<Message>;
  deleteDocument?: Maybe<Message>;
  addCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Message>;
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

export type MutationSignupArgs = {
  userData: Signup;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationContactMeArgs = {
  contact: ContactInput;
};

export type MutationDeleteDocumentArgs = {
  documentId: Scalars['String'];
};

export type MutationAddCategoryArgs = {
  addCategoryInput: AddCategoryInput;
};

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type LogoutQueryVariables = Exact<{[key: string]: never}>;

export type LogoutQuery = {__typename?: 'Query'} & {
  logout?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type ContactMeMutationVariables = Exact<{
  contact: ContactInput;
}>;

export type ContactMeMutation = {__typename?: 'Mutation'} & {
  contactMe?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type AddCategoryMutationVariables = Exact<{
  addCategoryInput: AddCategoryInput;
}>;

export type AddCategoryMutation = {__typename?: 'Mutation'} & {
  addCategory?: Maybe<
    {__typename?: 'Category'} & Pick<
      Category,
      'imgSrc' | 'name' | 'enDescription' | 'arDescription' | 'status' | 'createdAt' | 'updatedAt'
    >
  >;
};

export type CategoriesQueryVariables = Exact<{[key: string]: never}>;

export type CategoriesQuery = {__typename?: 'Query'} & {
  categories?: Maybe<
    Array<
      Maybe<
        {__typename?: 'Category'} & Pick<
          Category,
          'id' | 'imgSrc' | 'name' | 'enDescription' | 'arDescription' | 'status' | 'createdAt' | 'updatedAt'
        >
      >
    >
  >;
};

export type UpdateCategoryMutationVariables = Exact<{
  updateCategoryInput: UpdateCategoryInput;
}>;

export type UpdateCategoryMutation = {__typename?: 'Mutation'} & {
  updateCategory?: Maybe<
    {__typename?: 'Category'} & Pick<
      Category,
      'id' | 'imgSrc' | 'name' | 'enDescription' | 'arDescription' | 'status' | 'createdAt' | 'updatedAt'
    >
  >;
};

export type LoginQueryVariables = Exact<{
  userData: LoginDataInput;
}>;

export type LoginQuery = {__typename?: 'Query'} & {
  login?: Maybe<{__typename?: 'Login'} & Pick<Login, 'accessToken' | 'refreshToken' | 'userRole'>>;
};

export type SignupMutationVariables = Exact<{
  userData: Signup;
}>;

export type SignupMutation = {__typename?: 'Mutation'} & {
  signup?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type ProfileQueryVariables = Exact<{[key: string]: never}>;

export type ProfileQuery = {__typename?: 'Query'} & {
  profile?: Maybe<
    {__typename?: 'User'} & Pick<User, 'id' | 'email' | 'status' | 'verificationId' | 'gender' | 'avatar' | 'role'> & {
        name?: Maybe<{__typename?: 'Username'} & Pick<Username, 'first' | 'last'>>;
      }
  >;
};

export const LogoutDocument = gql`
  query Logout {
    logout {
      message
    }
  }
`;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
  return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, baseOptions);
}
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
  return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, baseOptions);
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const ContactMeDocument = gql`
  mutation ContactMe($contact: ContactInput!) {
    contactMe(contact: $contact) {
      message
    }
  }
`;
export type ContactMeMutationFn = Apollo.MutationFunction<ContactMeMutation, ContactMeMutationVariables>;

/**
 * __useContactMeMutation__
 *
 * To run a mutation, you first call `useContactMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactMeMutation, { data, loading, error }] = useContactMeMutation({
 *   variables: {
 *      contact: // value for 'contact'
 *   },
 * });
 */
export function useContactMeMutation(
  baseOptions?: Apollo.MutationHookOptions<ContactMeMutation, ContactMeMutationVariables>
) {
  return Apollo.useMutation<ContactMeMutation, ContactMeMutationVariables>(ContactMeDocument, baseOptions);
}
export type ContactMeMutationHookResult = ReturnType<typeof useContactMeMutation>;
export type ContactMeMutationResult = Apollo.MutationResult<ContactMeMutation>;
export type ContactMeMutationOptions = Apollo.BaseMutationOptions<ContactMeMutation, ContactMeMutationVariables>;
export const AddCategoryDocument = gql`
  mutation AddCategory($addCategoryInput: AddCategoryInput!) {
    addCategory(addCategoryInput: $addCategoryInput) {
      imgSrc
      name
      enDescription
      arDescription
      status
      createdAt
      updatedAt
    }
  }
`;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      addCategoryInput: // value for 'addCategoryInput'
 *   },
 * });
 */
export function useAddCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>
) {
  return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, baseOptions);
}
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const CategoriesDocument = gql`
  query Categories {
    categories {
      id
      imgSrc
      name
      enDescription
      arDescription
      status
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>
) {
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const UpdateCategoryDocument = gql`
  mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      id
      imgSrc
      name
      enDescription
      arDescription
      status
      createdAt
      updatedAt
    }
  }
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      updateCategoryInput: // value for 'updateCategoryInput'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>
) {
  return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(
    UpdateCategoryDocument,
    baseOptions
  );
}
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export const LoginDocument = gql`
  query Login($userData: LoginDataInput!) {
    login(userData: $userData) {
      accessToken
      refreshToken
      userRole
    }
  }
`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
}
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, baseOptions);
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const SignupDocument = gql`
  mutation Signup($userData: Signup!) {
    signup(userData: $userData) {
      message
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const ProfileDocument = gql`
  query Profile {
    profile {
      id
      name {
        first
        last
      }
      email
      status
      verificationId
      gender
      avatar
      role
    }
  }
`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
}
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
