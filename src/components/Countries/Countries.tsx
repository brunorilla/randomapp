import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {Spin} from "antd";
import styled from "styled-components";

interface CountriesListProps {
    countryName: string;
}

const GET_COUNTRIES = gql`
    query Countries($countryName: String!) {
        countries(filter: {continent: {eq: $countryName}}) {
            name
            emoji
        }
    }
`;


export const CountriesList = ({countryName}: CountriesListProps) => {
    const {loading, error, data} = useQuery(GET_COUNTRIES, {
        variables: {countryName}
    })

    if (loading) return <Spin></Spin>
    if (error) return <h1>{error.message}</h1>

    return (
        <StyledList>
            {data.countries.map((country: any) => (
                <li key={country.name}>{country.name} {country.emoji}</li>
            ))}
        </StyledList>
    )
}


export const StyledList = styled.ul`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    li {
      font-size: 14px;
      line-height: 16px;
      margin: 10px;
      background-color: whitesmoke;
      color: black;
      padding: 10px;
      border-radius: 5px;
    }
`;
