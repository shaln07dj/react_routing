
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home'
import Mount from "./mounting";
import Unmounting from './Unmounting';
import Updating from './Updating';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
      
 <Switch>
   <Route exact path="/" component={Home}/>
    <Route exact path="/mounting" component={Mount}/>
    <Route exact path="/updating" component ={Updating}></Route>
  <Route exact path ="/unmounting" component={Unmounting}></Route>
  </Switch>
    </BrowserRouter>
      <div>
    </div>
    
    </div>
  );
}

export default App;