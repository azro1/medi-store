import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useTheme } from './hooks/useTheme';

//components
import Navbar from './components/navbar/Navbar'
import Searchbar from './components/searchbar/Searchbar';
import ThemeSelector from './components/themeselector/ThemeSelector'

// pages
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
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
        <Searchbar />

        <Switch>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup" >
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
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
          <Route path="*" >
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
