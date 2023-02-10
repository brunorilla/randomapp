import React, {DetailedHTMLProps, FC, HTMLAttributes, useState} from 'react';
import {CardValues} from "../types/CardValues";
import styled from "styled-components";

export interface CardProps {
    id: string;
    dataCard: string;
    handleClick: (e: any) => any;
}


const Card: FC<CardProps> = ({id, dataCard = " ", handleClick}) => {
    const [cardState, setCardState] = useState({
        id: null,
        value: CardValues.Void,
        player: CardValues.Void
    })



    return (
        <StyledCard className={"card"} id={id.toString()} data-card={dataCard} onClick={(e: any)=>handleClick(e.target)}><h1>{dataCard}</h1></StyledCard>
    )


};




export default Card;

const StyledCard = styled.div`
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  max-width: 100px;
  max-height: 100px;
  h1 {
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    color: black;
    padding: 0;
    height: 20px;
    max-height: 20px;
    width: 20px;
  }
`

