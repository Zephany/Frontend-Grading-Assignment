import {useState} from 'react'
import '../Components/Dashboard/Dashboardmain.css'
import Header from '../Components/Dashboard/Header'
import Sidebar from '../Components/Dashboard/Sidebar'
import Home from './home'
import Homebar from '../Components/Dashboard/Homebar'

function Dashboardmain() {
    const [openSidebarToggle, setOpenSidebarToggle] =useState(false)

    const OpenSidebar =() => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
       <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle}/>
      <Homebar/>

       </div>
    )
}

export default Dashboardmain