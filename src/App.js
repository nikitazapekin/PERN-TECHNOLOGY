import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    < >
    <BrowserRouter>
    <NavBar />
       <AppRouter />
    </BrowserRouter>
    </ >
  );
}

export default App;
//npx create-react-app .
// npm i axios  react-router-dom mobx mobx-react-lite
//npm install react-bootstrap bootstrap