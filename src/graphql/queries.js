import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  query {
    characters {
      results {
        id
        name
        image
        origin {
          name
        }
        species
      }
    }
  }
`;

// export const LOAD_MODAL_DATA = gql`
//   query {
//     character($Id: ID!) {
//       name
//       episode {
//         episode
//         air_date
//       }
//     }
//   }
// `;
