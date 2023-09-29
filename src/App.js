import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
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
import { useAuthContext } from './hooks/useAuthContext';

//styles
import './App.css';

function App() {
  const { mode } = useTheme()
  const { authIsReady, user } = useAuthContext()

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <HashRouter>
          <Navbar />
          <ThemeSelector />
          <Searchbar />
          <Switch>
            <Route path="/login" >
              {user && <Redirect to="/dashboard" />}
              <Login />
            </Route>
            <Route path="/signup" >
              {user && <Redirect to="/dashboard" />}
              <Signup />
            </Route>
            <Route path="/dashboard">
              {!user && <Redirect to="/login" />}
              <Dashboard />
            </Route>
            <Route path="/search">
              {!user && <Redirect to="/login" />}
              <Search />
            </Route>
            <Route path="/create">
              {!user && <Redirect to="/login" />}
              <Create />
            </Route>
            <Route path="/medications/:id">
              {!user && <Redirect to="/login" />}
              <Medication />
            </Route>
            <Route path="/edit/:id">
              {!user && <Redirect to="/login" />}
              <Edit />
            </Route>
            <Route path="*" >
              {user && <Redirect to="/dashboard" />}
              {!user && <Redirect to="/login" />}
            </Route>
          </Switch>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
