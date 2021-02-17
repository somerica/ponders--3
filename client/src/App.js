import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewClothingItem from "./containers/NewClothingItem/NewClothingItem";
import ClothingDetail from "./containers/ClothingDetail/ClothingDetail";
import Services from "./containers/Services/Services";
import './App.css';
import Home from "./containers/Home/Home";
import Pickup from "./containers/Pickup/Pickup";
import Contact from "./containers/Contact/Contact";
import Admin from "./containers/Admin/Admin";
import NavBar from "./components/NavBar/NavBar";




function App() {
  return (
    <div>
      <Router>
        <NavBar/>
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/pickup" component={Pickup}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/services" component={Services}/>
         <Route exact path="/clothing/:id" component={ClothingDetail}/>
         <Route exact path="/admin" component={Admin}/>
         <Route exact path ="/admin/newclothingitem" component={NewClothingItem}/> 
         
         </Switch>
         </Router>
     </div>
  );
}

export default App;
