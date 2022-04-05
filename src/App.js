import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup';
import Submission from './pages/Submission/Submission';
import Footer from './Components/Footer/Footer';
import Maps from './pages/Map/Maps';
import Featured from './pages/Featured/Featured';
import Map from './pages/TestMap/map'
import Comments from './Components/Comments/Comments';


function App() {
  return (
    <BrowserRouter>
    <Route path={['/','/map']} exact component={Map}/>
    <Route path='/map/:id' component={Maps}/>
    <Route path='/signin' exact component={Signin}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/submission' exact component={Submission} />
    <Route path='/featured' exact component={Featured} />
   
    </BrowserRouter>
  );
  }
export default App;
