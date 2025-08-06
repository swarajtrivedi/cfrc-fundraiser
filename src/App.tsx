import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway';
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
