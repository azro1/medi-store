import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//components
import Navbar from './components/navbar/Navbar';

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
          <Route exact path="/medications/:id">
            <Medication />
          </Route>
        </Switch>
        {/* Added Redirect component that will redirect user to Home if they try to go to a page that doesn't exist. React Router will start at the top of the Routes and try to match every path in turn. If no paths match - it will get to this path (which is a wildcard)  and will match it hence redirecting user to Home */}
        <Route path="*" >
            <Redirect to="/" />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
