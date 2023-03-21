import styled from 'styled-components'
import {FC, PropsWithChildren, useEffect, useState} from "react";
import Card from "./Card";
import {Players} from "../types/Players";
import {NewBoardForm} from "./Forms/NewBoardForm";
import {FormikValues} from "formik";
import {Header} from "antd/es/layout/layout";
import {Content} from "antd/lib/layout/layout";
import {Button} from "antd";
import {checkForWin} from "../helpers/tictactoeUtils";
import {Table} from "antd/lib";
import {connect, ConnectedProps, useDispatch, useSelector} from "react-redux";
import addPoint, {TicTacToeAction, TicTacToeState} from '../stores';

/*
MANAGING REACT REDUX STORE
 */


export interface BoardProps {
    className: string;
}

export const Board: FC<BoardProps> = (props: PropsWithChildren<BoardProps>) => {

    /*
    HOOKS
     */


    const player1Points = useSelector((state: TicTacToeState) => state.points.player1)
    const player2Points = useSelector((state: TicTacToeState) => state.points.player2)

    const dispatch = useDispatch();

    console.log(player1Points)
    console.log(player2Points)

    const playersInitialState = {
        player1: {
            name: '',
            points: player1Points,
            symbol: 'X'
        },
        player2: {
            name: '',
            points: player2Points,
            symbol: 'O'

        }
    }

    const boardInitialState = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]

    const [players, setPlayers] = useState(playersInitialState)

    const [boardState, setBoard] = useState(boardInitialState)

    const [newRound, setNewRound] = useState<boolean>(false);

    const handleNewBoard = (values: FormikValues) => {
        setPlayers((prevPlayers) => ({
            ...prevPlayers,
            player1: {...prevPlayers.player1, name: values.player1},
            player2: {...prevPlayers.player2, name: values.player2}
        }));
        setTurn(Players.One)

    };

    const handleClick = (index: number) => {
        if (boardState[index] === "") {
            setBoard(prevBoard => {
                const newBoard = [...prevBoard];
                newBoard[index] = turn === Players.One ? "X" : "O";
                return newBoard;
            })
            setTurn(prevTurn => {
                return prevTurn === Players.One ? Players.Two : Players.One
            })
        }

    }

    const handleRestartGame = (): void => {
        setTurn(null);
        setPlayers(playersInitialState)
        setBoard(boardInitialState)
        setWinner(null)
        dispatch({type: 'RESET_POINTS'})
        return;
    }

    const handleNewRound = (): void => {
        setBoard(boardInitialState)
        setWinner(null);
    }

    const [turn, setTurn] = useState<Players | null>(null);
    const [winner, setWinner] = useState<Players | null>(null);


    useEffect(() => {
        let win = checkForWin(boardState)
        if (win !== null) {
            setWinner(win === "X" ? Players.One : Players.Two)
            setPlayers((prevPlayers) => ({
                ...prevPlayers,
                [win === "X" ? "player1" : "player2"]: {
                    ...prevPlayers[win === "X" ? "player1" : "player2"],
                    points: prevPlayers[win === "X" ? "player1" : "player2"].points
                }
            }));
            if (win === "X") {
                dispatch({type: 'ADD_POINT', payload: "player1"})
            } else {
                dispatch({type: 'ADD_POINT', payload: "player2"})
            }
        }
    }, [turn, boardState]);


    const dataSource = [
        {
            key: 'players',
            name: players.player1.name,
            points: player1Points,

        },
        {
            key: 'players',
            name: players.player2.name,
            points: player2Points,
        },
    ];

    const columns = [
        {
            title: 'Player',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
        }
    ];

    return (
        <>
            <Content>
                <StyledTable dataSource={dataSource} columns={columns} pagination={false}/>
            </Content>

            {turn === null ? (
                <NewBoardForm onNewBoard={handleNewBoard}></NewBoardForm>
            ) : winner === null || newRound ? (
                <>
                    <Header style={{backgroundColor: "white"}}>
                        <h2>Players are: {`${players.player1.name} and ${players.player2.name}`}</h2>
                    </Header>
                    <Header>
                        <h3 style={{color: "white"}}>
                            It's {turn === Players.One ? `${players.player1.name}'s` : `${players.player2.name}'s`} turn
                        </h3>
                    </Header>
                    <StyledBoard>
                        {boardState.map((_, index) => (
                            <Card key={index} id={index.toString()} handleClick={() => handleClick(index)}
                                  dataCard={boardState[index]}></Card>
                        ))}
                    </StyledBoard>
                </>
            ) : (
                <>
                    <Header style={{backgroundColor: "white"}}>
                        <h2>THE WINNER
                            IS: {winner === Players.One ? `${players.player1.name}` : `${players.player2.name}`}</h2>
                        <Content style={{display: "flex", justifyContent: "space-evenly", margin: "30px auto"}}>
                            <Button onClick={handleRestartGame}>Restart Game</Button>
                            <Button onClick={handleNewRound}>New Round</Button>
                        </Content>
                    </Header>
                </>
            )}
        </>
    );


    function getRandomPlayer(): Players {
        const players = Object.values(Players);
        const randomIndex = Math.floor(Math.random() * players.length);
        return players[randomIndex];
    }


}


export const StyledBoard = styled.div`
  width: 330px;
  min-height: 330px;
  display: flex;
  justify-content: center;
  margin: 20px auto 20px;
  box-sizing: border-box;
  background-color: lightblue;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

  .card {
    flex-basis: calc(33.33% - 20px);
    margin: 10px;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`



export const StyledTable = styled(Table)`
    width: 50%;
    margin: 30px auto;
    
`