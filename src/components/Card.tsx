import React, {DetailedHTMLProps, FC, HTMLAttributes, useState} from 'react';
import {CardValues} from "../types/CardValues";
import styled from "styled-components";

export interface CardProps {
    id: string;
    dataCard: string;
    handleClick: (e: any) => any;
}


const Card: FC<CardProps> = ({id, dataCard, handleClick}) => {
    const [cardState, setCardState] = useState({
        id: null,
        value: CardValues.Void,
        player: CardValues.Void
    })



    return (
        <div className={"card"} id={id.toString()} data-card={dataCard} onClick={(e)=>handleClick(e.target)}><h1>{dataCard}</h1></div>
    )


};

export default Card;


