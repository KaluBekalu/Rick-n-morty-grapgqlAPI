import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  query {
    characters {
      results {
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
