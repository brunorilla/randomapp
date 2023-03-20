import axios from "axios";
import {weatherApiKey} from "./index";

export async function getWeatherData(city: string) {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}