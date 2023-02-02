import React, {FC} from 'react';
import './App.css';
import { StyledBoard} from "./components/Board";
import styled from 'styled-components'

export const App: FC =()=> {
  return (
    <div className="App">
      <StyledBoard className={"test"}></StyledBoard>
    </div>
  );
}

export default App;


export const StyledApp = styled(App)`
  .App {
    margin-top: 20px;
  }
  
  
  
`

