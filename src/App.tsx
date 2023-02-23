import React, {FC} from 'react';
import './App.css';
import {Board} from "./components/Board";
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MainLayout} from "./components/Home/MainLayout";
import {Provider} from 'react-redux'
import store from './stores'

export const App: FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout></MainLayout>}></Route>
                    <Route path="/game" element={<MainLayout component={Board}/>}/>

                </Routes>
            </Router>
        </Provider>
    );
}

export default App;


export const StyledApp = styled(App)`
  .App {
    margin-top: 20px;
  }`

