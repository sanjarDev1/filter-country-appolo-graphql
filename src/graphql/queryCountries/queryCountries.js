import { gql } from '@apollo/client/core';

export const GET_COUNTRY = gql`
  query GetCountry($code: [String]) {
    countries(filter: { code: { in: $code } }) {
      code
      name
      native
      phone
      continent {
        name
      }
      capital
      currency
      languages {
        name
        native
      }
      emoji
      states {
        name
      }
    }
  }
`;
