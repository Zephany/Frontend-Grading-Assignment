import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
    from 'react-icons/bs'
import image1 from '../../Images/img1.jpg'
function Homebar(){
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                <div className='card-inner'>
                    <h3>COURSES</h3>
                    <BsFillArchiveFill className='card_icon'/>
                    </div>
                <h1>3</h1>
                </div>
             <div className='card'>
                <div className='card-inner'>
                    <h3>GRADES</h3>
                    < BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                <h1>N/A</h1>
                </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>RESOURCES</h3>
                    < BsPeopleFill className='card_icon'/>
                    </div>
                <h1>7</h1>
                </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ANNOUNCEMENT</h3>
                    < BsFillBellFill className='card_icon'/>
                    </div>
                <h1>1</h1>
                </div>
            </div>

            <div className='Images'>
                <img alt='' src={image1} />
                

            </div>
        </main>
    )
}

export default Homebar