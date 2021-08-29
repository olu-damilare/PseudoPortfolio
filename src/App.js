import './App.css';
import Header from './reuseables/headers';
import {SiTwitter} from "react-icons/si";
import {RiGithubFill} from "react-icons/ri";
import {RiDribbbleLine} from "react-icons/ri";
import Footer from './reuseables/footer';
import {BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom'
import Home from './home';
import About from './about';

import Articles from './articles';

function App() {
 

  return (
    <Router>
      <div className="App">
      <Header  />
      {/* <Home /> */}
      <Switch> 
            <Route path="/articles" component = {Articles} exact/> 
            <Route path="/about" component = {About} exact/> 
            <Route path="/" component = {Home} exact/> 

            {/* <Route path="../articles" component={Articles} /> */}
          </Switch>
      <Footer twitter = {<SiTwitter color="#ECF8FF"/>} github = {<RiGithubFill color="#ECF8FF"/>} dribble = {<RiDribbbleLine color="#ECF8FF"/>}/>
   
      
    </div>
    </Router>
  );
}

export default App;
