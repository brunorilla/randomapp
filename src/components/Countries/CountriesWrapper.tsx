import React, {useState} from 'react';
import {CountriesList} from "./Countries";
import CountriesForm from "./CountriesForm";

export const CountriesWrapper = ()=> {
    const [countryName, setCountryName] = useState('')

    const handleSubmit = (values: {countryName: string}) => {
        setCountryName(values.countryName)
    }

    return (
        <>
            <CountriesForm onSubmit={handleSubmit}/>
            {countryName && <CountriesList countryName={countryName}/>}
        </>
    )
}