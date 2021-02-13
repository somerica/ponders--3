import NewClothingitem from "./containers/NewClothingitem/NewClothingitem";
import ClothingDetail from "./container/ClothingDetail/ClothingDetail";
import Services from "./containers/Services/Services";
import './App.css';


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
         <Route exact path ="/admin/newclothingitem" component={NewClothingitem}/>  
         </Switch>
         </Router>
     </div>
  );
}

export default App;
