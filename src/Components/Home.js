import React from 'react'
import wayup from './images/wayup.gif'
import './Home.css'
function  Home(){
    return (
        <div className='home'>
            <div className='rocket-img'>

                <img className='rocket' src ={wayup} alt={'wayup'}/>
            </div>
            <div className='home-right'>
                <div className='fade-in-right'>
                    <h1 className='name'>Arad Bivas</h1>
                </div>
                <div className='fade-in-left'>
                    <h3 className='desc'>    Software Developer</h3>
                </div>
            </div>

        </div>
    )
}

export default Home;