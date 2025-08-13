import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
    </>
  );
}

export default App;
