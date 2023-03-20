import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {Spin, Table} from "antd";
import styled from "styled-components";
import {LoadingOutlined} from '@ant-design/icons';
import {GET_COUNTRIES_BY_CONTINENT, GET_COUNTRY_BY_CODE} from "./queries";

interface CountriesListProps {
    countryName: string;
}

const antIcon = <LoadingOutlined style={{fontSize: 60, color: "white"}} spin/>;

export const CountriesList = ({countryName}: CountriesListProps) => {
    const {loading, error, data} = useQuery(GET_COUNTRIES_BY_CONTINENT, {
        variables: {countryName}
    })

    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const {loading: countryLoad, error: countryError, data: countryData} = useQuery(GET_COUNTRY_BY_CODE, {
        variables: {countryCode: selectedCountry},
        skip: !selectedCountry
    })

    if (loading) return <Spin indicator={antIcon}></Spin>
    if (error) return <h1>{error.message}</h1>

    const handleCountryClick = (event: any) => {
        const countryCode = event.target.dataset.countryCode;
        console.log(countryCode);
        setSelectedCountry(countryCode)
    }

    const countryDataSource = [
        {
            key: countryData && !countryLoad ? countryData.country.countryCode : ' ',
            name: countryData && !countryLoad ? countryData.country.name : '',
            currency: countryData && !countryLoad ? countryData.country.currency : '',
            languages: countryData && !countryLoad ? countryData.country.languages.map((lang: any) => lang.name + "  " ) : ''
        }
    ]

    const columns = [
        {title: 'País', dataIndex: 'name', key: 'name'},
        {title: 'Moneda', dataIndex: 'currency', key: 'currency'},
        {title: 'Idioma', dataIndex: 'languages', key: 'languages'}
    ]


    return (
        <>
            <StyledList>
                {data.countries.map((country: any) => (
                    <li data-country-code={country.code} onClick={(e) => handleCountryClick(e)}
                        key={country.name}>{country.name} {country.emoji}</li>
                ))}
            </StyledList>
            {
                selectedCountry && (
                    (countryLoad && <Spin indicator={antIcon}></Spin>) ||
                    (countryError && <h1>{countryError?.message}</h1>) ||
                    (!countryLoad && countryData && <StyledCountryTable><Table dataSource={countryDataSource} columns={columns}/></StyledCountryTable>))
            }
        </>
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
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all .3s ease;
  }

  li:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
`;


export const StyledCountryTable = styled.div`
  width: 80%;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
`
