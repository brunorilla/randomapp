import {useEffect, useState} from "react";

export type WeatherData = {
    condition: string;
}

export type ImageMapping = {
    [condition: string]: string;
}

export const useWeatherImage = (data: WeatherData, mapping: ImageMapping): string => {
    const [image, setImage] = useState('');

    useEffect(() => {
        if(data.condition in mapping){
            setImage(mapping[data.condition]);
        } else {
            setImage('')
        }
    }, [data.condition, mapping]);

    return image;
}