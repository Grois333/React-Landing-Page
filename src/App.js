import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Trends from './Components/Trends';
import Collections from './Components/Collections';
import Tips_Guides from './Components/Tips_Guides';
import Find_Store from './Components/Find_Store';
import Contact from './Components/Contact';
import Search from './Components/Search';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/trends' component={Trends} />
            <Route path='/collections' component={Collections} />
            <Route path='/tips-guides' component={Tips_Guides} />
            <Route path='/find-store' component={Find_Store} />
            <Route path='/contact' component={Contact} />
            <Route path='/search' component={Search} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
