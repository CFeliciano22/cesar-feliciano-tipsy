import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup';
import Submission from './Components/Submission/Submission';
import Footer from './Components/Footer/Footer';
import Maps from './Components/Map/Maps';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    {/* <Maps/> */}
    <Signin/>
    {/* <Signup/> */}
    {/* <Submission/> */}
    {/* <Footer/> */}
    </BrowserRouter>
  );
  }

export default App;
