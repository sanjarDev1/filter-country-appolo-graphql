import { gql } from '@apollo/client/core';

export const GET_COUNTRY_ALL = gql`
  query GetCountryAll($code: [String]) {
    countries(filter: { code: { nin: $code } }) {
      code
      name
      native
      phone
      continent {
        code
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
