import React from 'react';
import {useFormik} from 'formik';
import {Button, Select} from "antd";
import styled from "styled-components";

const {Option} = Select

interface CountriesFormProps {
    onSubmit: (values: { countryName: string }) => void
}

function CountriesForm({onSubmit}: CountriesFormProps) {
    const formik = useFormik({
        initialValues: {countryName: ''},
        onSubmit: values => {
            onSubmit(values);
        }
    })

    return (
        <StyledCountriesForm>
            <form onSubmit={formik.handleSubmit}>
                <div>
                <label htmlFor="countryName">Continente</label>
                <Select
                    defaultValue={"SA"}
                    className="countrySelect"
                    id="countryName"
                    value={formik.values.countryName}
                    onChange={(value: any) => formik.setFieldValue('countryName', value)}
                    onBlur={formik.handleBlur}
                >

                    <Option value="">-- Elija un continente --</Option>
                    <Option value="SA">Sudamérica</Option>
                    <Option value="NA">Norteamérica</Option>
                    <Option value="AF">Africa</Option>
                    <Option value="AS">Asia</Option>
                    <Option value="EU">Europa</Option>
                    <Option value="OC">Oceanía</Option>
                    <Option value="AN">Antártida</Option>
                </Select>
                </div>
                <Button className={"searchButton"} type={"default"} htmlType={"submit"}>Buscar</Button>
            </form>
        </StyledCountriesForm>
    )
}

export default CountriesForm;


export const StyledCountriesForm = styled.div`
  width: 50%;
  margin: 0 auto;
  form {
    label {
      margin: 0 20px 0;
      font-size: 20px;
    }
    .countrySelect {
      min-width: 200px;
    }
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    .searchButton {
      width: 200px;
      margin: 10px auto;
      
    }
  }
`