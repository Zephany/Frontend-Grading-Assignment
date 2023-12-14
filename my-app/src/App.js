import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/home';
import Dashboard from './Components/Dashboard/Dashboard';
import Gradereport from './pages/Gradereport';
import Missinggrade from './pages/Missinggrade';
import HelpandSupport from './pages/HelpandSupport';
import Login from './pages/Login';
import Navbar from './Components/nav bar/navbar';
import Logins from './Components/login/login';
import Dashboardmain from './pages/Dashboardmain';
import Instructors from './Components/instructor/instructor';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
    {/* <Login/> */}
    {/* <Dashboardmain/> */}
    <Instructors/>



    </div>
  );
}

export default App;
