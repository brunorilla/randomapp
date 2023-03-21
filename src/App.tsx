import React, {FC} from 'react';
import './App.css';
import {Board} from "./components/Board";
import styled from 'styled-components'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MainLayout} from "./components/Home/MainLayout";
import {Provider} from 'react-redux'
import store from './stores'
import {Weather} from "./components/Weather/Weather";
import {ApolloProvider} from "@apollo/client";
import client from "./client";
import {CountriesWrapper} from "./components/Countries/CountriesWrapper";
import SignInWithGoogleButton from "./components/Login/Login";


export const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainLayout component={SignInWithGoogleButton}></MainLayout>}> </Route>
                        <Route path="/weather" element={<MainLayout component={Weather}></MainLayout>}></Route>
                        <Route path="/game" element={<MainLayout component={Board}/>}/>
                        <Route path="/countries" element={<MainLayout component={CountriesWrapper}/>}></Route>
                    </Routes>
                </Router>
            </Provider>
        </ApolloProvider>
    );
}

export default App;


export const StyledApp = styled(App)`
  .App {
    margin-top: 20px;
  }`

