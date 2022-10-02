import React from 'react'
import './Projects.css'
import galaxy from './images/galaxy.jpg'
import Card from './images/Card'
import music from './images/music.jpg'
import calc from './images/calc.jpg'
import garage from './images/garage.jpg'
import gamers from './images/gamers.jpg'
const Projects = () => {
    return (
        <div className='projects'>
            <div className='left-container-projects'>
                <img className='galaxy' src={galaxy} alt='galaxy'/>
            </div>
            <div className='right-container-projects'>
                    <Card img={music}
                          title='Music RESTful API'
                          paragraph='Create your own playlist with this Restful API.'
                          stack='Developed using Java Spring Boot'
                          github='https://github.com/aradbivas/Music-Restfull-Api'

                    />
                <Card img={calc}
                      title='Costs Manager'
                      paragraph='Control you own expansion with this app, get a detailed report by month and year.'
                      stack='Build with Node.js React Mongodb and deployed on AWS.'
                      github='https://github.com/aradbivas/Cost-Manager'
                      live = 'http://34.203.202.32/'

                />
                <Card img={garage}
                      title='Garage Management System'
                      paragraph="manages different type of vehicles in the garage, from changing repair status to handling payments. "
                      stack='Build using C# and .Net'
                      github='https://github.com/aradbivas/Garage-Mangment-System'

                />
                <Card img={gamers}
                      title='Gamers Socials'
                      paragraph='Choose your favorites games to play, join a custom game chat and find you gaming body!'
                      stack='Developed using Java Firebase in Android Studio'
                      github='https://github.com/aradbivas/Gamers-Social-Android-App'

                />


            </div>
        </div>
    )
}

export default Projects;