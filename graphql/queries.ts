import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]: Maybe<T[SubKey]>};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
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

export type CategoryInput = {
  id: Scalars['ID'];
  imgSrc: Scalars['String'];
  name: Scalars['String'];
  enDescription: Scalars['String'];
  arDescription: Scalars['String'];
  status: CategoryStatus;
};

export enum CategoryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type Cities = {
  __typename?: 'Cities';
  name: Scalars['String'];
};

export type ContactInput = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type Countries = {
  __typename?: 'Countries';
  country: Scalars['String'];
  abbreviation: Scalars['String'];
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

export type File = {
  __typename?: 'File';
  filename?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  mimtype?: Maybe<Scalars['String']>;
};

export type Login = {
  __typename?: 'Login';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  userRole: Scalars['String'];
};

export type LoginDataInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
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
  createCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Message>;
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
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

export type MutationCreateCategoryArgs = {
  categoryData: CategoryInput;
};

export type MutationUpdateCategoryArgs = {
  categoryData: CategoryInput;
};

export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type MutationCreatePostArgs = {
  post: PostInput;
};

export type MutationUpdatePostArgs = {
  post: PostInput;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['ID']>;
  banner?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  postCategoryIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  postCategoryTags?: Maybe<Array<Maybe<Category>>>;
  arTitle?: Maybe<Scalars['String']>;
  arBody?: Maybe<Scalars['String']>;
  arReadingTime?: Maybe<Scalars['String']>;
  enTitle?: Maybe<Scalars['String']>;
  enBody?: Maybe<Scalars['String']>;
  enReadingTime?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type PostInput = {
  id: Scalars['ID'];
  banner?: Maybe<Scalars['String']>;
  postCategoryIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  arTitle: Scalars['String'];
  arBody?: Maybe<Scalars['String']>;
  enTitle: Scalars['String'];
  enBody?: Maybe<Scalars['String']>;
  status: PostStatus;
};

export enum PostStatus {
  Published = 'PUBLISHED',
  Draft = 'DRAFT',
  Course = 'COURSE',
}

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
  posts?: Maybe<Array<Maybe<Post>>>;
  findPostByTitle?: Maybe<Post>;
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

export type QueryFindPostByTitleArgs = {
  title: Scalars['String'];
};

export type ResetPasswordInput = {
  userId: Scalars['String'];
  verificationId: Scalars['String'];
  password: Scalars['String'];
};

export type Signup = {
  email: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<UsernameInput>;
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

export type UsernameInput = {
  first?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
};

export type VerificationUserInput = {
  userId: Scalars['ID'];
  verificationId: Scalars['String'];
};

export type LogoutQueryVariables = Exact<{[key: string]: never}>;

export type LogoutQuery = {__typename?: 'Query'} & {
  logout?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type FindPostByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;

export type FindPostByTitleQuery = {__typename?: 'Query'} & {
  findPostByTitle?: Maybe<{__typename?: 'Post'} & PostFragmentFragment>;
};

export type ContactMeMutationVariables = Exact<{
  contact: ContactInput;
}>;

export type ContactMeMutation = {__typename?: 'Mutation'} & {
  contactMe?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = {__typename?: 'Mutation'} & {
  forgotPassword?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type LoginQueryVariables = Exact<{
  userData: LoginDataInput;
}>;

export type LoginQuery = {__typename?: 'Query'} & {
  login?: Maybe<
    {__typename?: 'Login'} & Pick<
      Login,
      'accessToken' | 'refreshToken' | 'userRole'
    >
  >;
};

export type ResetPasswordMutationVariables = Exact<{
  userData: ResetPasswordInput;
}>;

export type ResetPasswordMutation = {__typename?: 'Mutation'} & {
  resetPassword?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type SignupMutationVariables = Exact<{
  userData: Signup;
}>;

export type SignupMutation = {__typename?: 'Mutation'} & {
  signup?: Maybe<{__typename?: 'Message'} & Pick<Message, 'message'>>;
};

export type CategoryFragmentFragment = {__typename?: 'Category'} & Pick<
  Category,
  | 'id'
  | 'imgSrc'
  | 'name'
  | 'enDescription'
  | 'arDescription'
  | 'status'
  | 'createdAt'
  | 'updatedAt'
>;

export type CreatePostMutationVariables = Exact<{
  post: PostInput;
}>;

export type CreatePostMutation = {__typename?: 'Mutation'} & {
  createPost?: Maybe<{__typename?: 'Post'} & PostFragmentFragment>;
};

export type PostFragmentFragment = {__typename?: 'Post'} & Pick<
  Post,
  | 'id'
  | 'banner'
  | 'status'
  | 'postCategoryIds'
  | 'arTitle'
  | 'arBody'
  | 'arReadingTime'
  | 'enTitle'
  | 'enBody'
  | 'enReadingTime'
  | 'authorId'
  | 'createdAt'
  | 'updatedAt'
> & {
    postCategoryTags?: Maybe<
      Array<Maybe<{__typename?: 'Category'} & CategoryFragmentFragment>>
    >;
    author?: Maybe<{__typename?: 'User'} & UserFragmentFragment>;
  };

export type PostsQueryVariables = Exact<{[key: string]: never}>;

export type PostsQuery = {__typename?: 'Query'} & {
  posts?: Maybe<Array<Maybe<{__typename?: 'Post'} & PostFragmentFragment>>>;
};

export type ProfileQueryVariables = Exact<{[key: string]: never}>;

export type ProfileQuery = {__typename?: 'Query'} & {
  profile?: Maybe<
    {__typename?: 'User'} & Pick<
      User,
      | 'id'
      | 'email'
      | 'status'
      | 'verificationId'
      | 'gender'
      | 'avatar'
      | 'role'
    > & {
        name?: Maybe<
          {__typename?: 'Username'} & Pick<Username, 'first' | 'last'>
        >;
      }
  >;
};

export type UpdatePostMutationVariables = Exact<{
  post: PostInput;
}>;

export type UpdatePostMutation = {__typename?: 'Mutation'} & {
  updatePost?: Maybe<{__typename?: 'Post'} & PostFragmentFragment>;
};

export type UserFragmentFragment = {__typename?: 'User'} & Pick<
  User,
  'id' | 'email' | 'status' | 'verificationId' | 'gender' | 'avatar' | 'role'
> & {
    name?: Maybe<{__typename?: 'Username'} & Pick<Username, 'first' | 'last'>>;
  };

export const CategoryFragmentFragmentDoc = gql`
  fragment CategoryFragment on Category {
    id
    imgSrc
    name
    enDescription
    arDescription
    status
    createdAt
    updatedAt
  }
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
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
`;
export const PostFragmentFragmentDoc = gql`
  fragment PostFragment on Post {
    id
    banner
    status
    postCategoryIds
    postCategoryTags {
      ...CategoryFragment
    }
    arTitle
    arBody
    arReadingTime
    enTitle
    enBody
    enReadingTime
    authorId
    author {
      ...UserFragment
    }
    createdAt
    updatedAt
  }
  ${CategoryFragmentFragmentDoc}
  ${UserFragmentFragmentDoc}
`;
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
export function useLogoutQuery(
  baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(
    LogoutDocument,
    options
  );
}
export function useLogoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<
  LogoutQuery,
  LogoutQueryVariables
>;
export const FindPostByTitleDocument = gql`
  query FindPostByTitle($title: String!) {
    findPostByTitle(title: $title) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useFindPostByTitleQuery__
 *
 * To run a query within a React component, call `useFindPostByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPostByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPostByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useFindPostByTitleQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindPostByTitleQuery,
    FindPostByTitleQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<FindPostByTitleQuery, FindPostByTitleQueryVariables>(
    FindPostByTitleDocument,
    options
  );
}
export function useFindPostByTitleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindPostByTitleQuery,
    FindPostByTitleQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    FindPostByTitleQuery,
    FindPostByTitleQueryVariables
  >(FindPostByTitleDocument, options);
}
export type FindPostByTitleQueryHookResult = ReturnType<
  typeof useFindPostByTitleQuery
>;
export type FindPostByTitleLazyQueryHookResult = ReturnType<
  typeof useFindPostByTitleLazyQuery
>;
export type FindPostByTitleQueryResult = Apollo.QueryResult<
  FindPostByTitleQuery,
  FindPostByTitleQueryVariables
>;
export const ContactMeDocument = gql`
  mutation ContactMe($contact: ContactInput!) {
    contactMe(contact: $contact) {
      message
    }
  }
`;
export type ContactMeMutationFn = Apollo.MutationFunction<
  ContactMeMutation,
  ContactMeMutationVariables
>;

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
  baseOptions?: Apollo.MutationHookOptions<
    ContactMeMutation,
    ContactMeMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<ContactMeMutation, ContactMeMutationVariables>(
    ContactMeDocument,
    options
  );
}
export type ContactMeMutationHookResult = ReturnType<
  typeof useContactMeMutation
>;
export type ContactMeMutationResult = Apollo.MutationResult<ContactMeMutation>;
export type ContactMeMutationOptions = Apollo.BaseMutationOptions<
  ContactMeMutation,
  ContactMeMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
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
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options
  );
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(
    LoginDocument,
    options
  );
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<
  LoginQuery,
  LoginQueryVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($userData: ResetPasswordInput!) {
    resetPassword(userData: $userData) {
      message
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const SignupDocument = gql`
  mutation Signup($userData: Signup!) {
    signup(userData: $userData) {
      message
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

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
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const CreatePostDocument = gql`
  mutation CreatePost($post: PostInput!) {
    createPost(post: $post) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const PostsDocument = gql`
  query Posts {
    posts {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
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
export function useProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    options
  );
}
export function useProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    options
  );
}
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<
  ProfileQuery,
  ProfileQueryVariables
>;
export const UpdatePostDocument = gql`
  mutation UpdatePost($post: PostInput!) {
    updatePost(post: $post) {
      ...PostFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
