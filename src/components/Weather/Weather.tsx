import React, {ChangeEvent, useState} from 'react';
import {getWeatherData} from "../../globals/utils";
import {Content} from "antd/lib/layout/layout";
import {Button, Descriptions, Input, Layout} from "antd";
import styled from "styled-components";
import Title from "antd/es/typography/Title";

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}

export const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent) => {
        setButtonLoading(true)
        event.preventDefault();
        const data = await getWeatherData(city);
        setWeatherData(data);
        setButtonLoading(false)
        setCity('');
    };


    console.log(weatherData)
    return (
        <WeatherWrapper>
            <Layout>
                <Title>Dr. Tiempo</Title>
                <Title level={3}> Pregúntele al Dr. qué tiempo hace en su ciudad de preferencia</Title>
            </Layout>
            <form onSubmit={handleSubmit}>
                <Input
                    value={city}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setCity(event.target.value)}
                />
                <Button htmlType="submit" type={"primary"} onClick={handleSubmit} loading={buttonLoading}>Get Weather</Button>
            </form>
            {weatherData && (
                <StyledWeather>
                    <Descriptions bordered size={"small"} column={1}>
                        <Descriptions.Item> <img
                            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                            alt="Weather Icon"
                        /></Descriptions.Item>
                        <Descriptions.Item label="City">{weatherData.name}</Descriptions.Item>
                        <Descriptions.Item label="Temperature">{weatherData.main.temp} °C</Descriptions.Item>
                        <Descriptions.Item label="Feels like">{weatherData.main.feels_like} °C</Descriptions.Item>
                        <Descriptions.Item label="Humidity">{weatherData.main.humidity}%</Descriptions.Item>
                        <Descriptions.Item label="Description">{weatherData.weather[0].description}</Descriptions.Item>

                    </Descriptions>

                </StyledWeather>
            )}
        </WeatherWrapper>
    );
}

export const WeatherWrapper = styled(Content)`
  margin: 20px auto;
  width: 30%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  form {
    width: 100%;
    margin: 20px 0;
    button {
      margin: 10px 0;
    }
  }
`;

export const StyledWeather = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  width:100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`
