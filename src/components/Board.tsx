import styled from 'styled-components'
import {FC, PropsWithChildren, useState, useEffect} from "react";
import Card from "./Card";
import {CardValues} from "../types/CardValues";

export interface BoardProps {
    className: string;
}

export const Board: FC<BoardProps> = (props: PropsWithChildren<BoardProps>) => {
    const [players, setPlayers] = useState({
        player1: {
            name: '',
            points: '',
            symbol: 'X'
        },
        player2: {
            name: '',
            points: '',
            symbol: 'O'

        }
    })

    const [boardState, setBoard] = useState([
        "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
    ])


    const handleClick = (index: number) => {
        if(boardState[index] === ""){
            console.log(index)
            setBoard(prevBoard => {
                const newBoard = [...prevBoard];
                newBoard[index] = "X";
                return newBoard;
            })
        }

        /*
        if (cardState.value === CardValues.Void && cardState.player === CardValues.Circle) {
            setCardState({...cardState, value: CardValues.Circle})
        } else if (cardState.value === CardValues.Void) {
            setCardState({...cardState, value: CardValues.Cross})
        }

         */
    }


    const [turn, setTurn] = useState();
    const [winner, setWinner] = useState(null);


    return (
        <StyledBoard>
            {boardState.map((_, index) => (
                <Card key={index} id={index.toString()} handleClick={()=>handleClick(index)} dataCard={boardState[index]}></Card>
            ))}
        </StyledBoard>
    )
}


export const StyledBoard = styled.div`
  width: 90%;
  height: 600px;
  display: flex;
  justify-content: center;
  margin: 20px auto 0 auto;
  box-sizing: border-box;
  background-color: lightblue;
  flex-wrap: wrap;
  .card {
    flex-basis: calc(33.33% - 20px);
    margin: 10px;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    cursor: pointer;
    h1 {
      font-size: 70px;
    }
  }
`


