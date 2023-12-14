import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
 BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 
function Sidebar({opensidebarToggle}){
    return(
        <aside id='sidebar' className={opensidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header'/> STUDENT
                </div>
                <span className='icon close_close'>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                   <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                   </a>  
                </li>
                <li className='sidebar-list-item'>
                   <a href="">
                    <BsFillArchiveFill className='icon'/> Sudents
                   </a>

                   
                </li> <li className='sidebar-list-item'>
                   <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Courses
                   </a>

                   
                </li> <li className='sidebar-list-item'>
                   <a href="">
                    < BsPeopleFill className='icon'/> Grades
                   </a>

                   
                </li> <li className='sidebar-list-item'>
                   <a href="">
                    < BsListCheck className='icon'/> Resources
                   </a>

                   
                </li> <li className='sidebar-list-item'>
                   <a href="">
                    <BsMenuButtonWideFill className='icon'/> Announcement
                   </a>

                   
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar