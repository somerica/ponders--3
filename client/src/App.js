import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewClothingItem from "./containers/NewClothingItem/";
import ClothingDetail from "./containers/ClothingDetail/ClothingDetail";
import Services from "./containers/Services/Services";
import './App.css';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from ".containers/Contact/Contact";
import Admin from "./containers/Admin/Admin";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
         <Switch>
         <Route exact path="/" component= {Home}/>
         <Route exact path="/about" component= {About}/>
         <Route exact path="/contact" component= {Contact}/>
         <Route exact path="/services" component= {Services}/>
         <Route exact path="/clothing/:id" component= {ClothingDetail}/>
         <Route exact path="/admin" component= {Admin}/>
         <Route exact path ="/admin/newclothingitem" component={NewClothingItem}/>  
         </Switch>
         </Router>
     </div>
  );
}

export default App;
