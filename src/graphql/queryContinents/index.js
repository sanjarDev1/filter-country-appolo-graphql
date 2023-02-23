import { gql } from '@apollo/client/core';

export const GET_CONTINENTS = gql`
  query GetContinents($code: [String]) {
    continents(filter: { code: { in: $code } }) {
      code
      name
      countries {
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
  }
`;
