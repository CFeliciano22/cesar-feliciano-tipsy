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
import Map from './Components/TestMap/map'
import Comments from './Components/Comments/Comments';


function App() {
  return (
    <BrowserRouter>
   
    {/* <Comments/> */}
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
