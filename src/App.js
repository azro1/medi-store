import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useTheme } from './hooks/useTheme';

//components
import Navbar from './components/navbar/Navbar'
import ThemeSelector from './components/themeselector/ThemeSelector'

// pages
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Medication from './pages/medication/Medication'
import Edit from './pages/edit/Edit'

//styles
import './App.css';

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
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
