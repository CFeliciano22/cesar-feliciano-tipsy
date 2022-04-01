import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup';
import Submission from './Components/Submission/Submission';
import Footer from './Components/Footer/Footer';
import Maps from './Components/Map/Maps';
import Featured from './Components/Featured/Featured';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Route path='/map/:id' component={Maps}/>
    {/* <Signin/> */}
    {/* <Signup/> */}
    {/* <Route path='/submission' exact component={Submission} /> */}
    {/* <Footer/> */}
    {/* <Featured/> */}
    </BrowserRouter>
  );
  }
export default App;
