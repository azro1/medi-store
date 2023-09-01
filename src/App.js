import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';

// pages
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Medication from './pages/medication/Medication';
import Edit from './pages/edit/Edit';


//styles
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/medications/:id">
            <Medication />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
        <Route path="*" >
            <Redirect to="/" />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
