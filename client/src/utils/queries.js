import { gql } from '@apollo/client';

export const GET_USER = gql`
    query User($username: String!) {
         user(username: $username) {
            _id
            username
            email
            savedBooks {
                _id
                authors
                description
                bookId
                image
                link
                title
    }
  }
}
`;

export const QUERY_ME = gql`
  query Me {
  me {
    _id
    username
    email
    savedBooks {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;