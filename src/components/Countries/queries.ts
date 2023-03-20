import {gql} from "@apollo/client";

export const GET_COUNTRIES_BY_CONTINENT = gql`
    query Countries($countryName: String!) {
        countries(filter: {continent: {eq: $countryName}}) {
            code
            name
            emoji
        }
    }
`;

export const GET_COUNTRY_BY_CODE = gql`
    query Country($countryCode: ID!) {
        country(code: $countryCode) {
            code
            name
            currency
            emoji
            languages {
                name
            }
            states {
                name
            }
            phone
        }
    }
`;