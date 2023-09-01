import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Medication from './pages/medication/Medication';

//styles
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/search" >
            <Search />
          </Route>
          <Route path="/create" >
            <Create />
          </Route>
          <Route exact path="/medications/:id">
            <Medication />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
