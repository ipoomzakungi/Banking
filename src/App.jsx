import Home from "./pages/Home"
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";


const App = () => {
  const user = useSelector(state=>state.user.currentUser)

  return (
    <Router>

      <Routes>
        {//<Route path='/' element={<Home />} />
}
        <Route path='/' element={user ? <Dashboard/> : <Home/>} />
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />
        <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to="/" />} />

        



      </Routes>
    </Router>
  );
};

export default App;