import logo from './logo.svg';
import './App.css';
// import {Route, Route } from
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
import Footer from './Components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    {/* <Login/> */}
    {/* <Dashboardmain/> */}
    {/* <Instructors/> */}
    
    {/* <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Gradereport" element={<Gradereport />} />
      <Route path="Missinggrade" element={<Missinggrade />} />
      <Route path="Instructors" element={<Instructors />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="HelpandSupport" element={<HelpandSupport />} />
    </Routes> */}



    </div>
  );
}

export default App;
