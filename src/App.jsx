import Home from "./pages/Home"
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from "./pages/Login";


const App = () => {
  const user = false
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />



      </Routes>
    </Router>
  );
};

export default App;