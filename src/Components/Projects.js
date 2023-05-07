import React from 'react'
import './Projects.css'
import galaxy from './images/galaxy.jpg'
import Card from './Card'
import music from './images/music.jpg'
import calc from './images/calc.jpg'
import garage from './images/garage.jpg'
import gamers from './images/gamers.jpg'
import bulleyes from './images/bulleyes.jpg'
import menu from './images/menu.jpg'
import server from './images/server.jpg'
import rating from './images/rating.jpg'
import botdrop from './images/botdrop.jpg'
const Projects = () => {
    return (
        <div className='projects'>
            <div className='left-container-projects'>
                <img className='galaxy' src={galaxy} alt='galaxy'/>
            </div>
            <div className='right-container-projects'>
                <Card img={calc}
                      title='Costs Manager'
                      paragraph='Control you own expansion with this app, get a detailed report by month and year.'
                      stack='Build with Node.js, Express, React and  Mongodb.'
                      github='https://github.com/aradbivas/Cost-Manager'
                      live = "https://costs-manager.netlify.app/"

                />
                <Card img={botdrop}
                      title='Amzon Price Drop Bot'
                      paragraph='Track your favorit items on amzon using this telegram bot and get alert when the price drops!'
                      stack='Designed using a microservice architecture, using java spring, Eureka Server, feign client, RabbitMQ and Docker'
                      github='https://github.com/aradbivas/Amazon-Price-Drop-Bot'
                      live = "https://t.me/amzonpricedropbot"


                />
                    <Card img={music}
                          title='Music RESTful API'
                          paragraph='Create your own playlist with this Restful API.'
                          stack='Developed using Java Spring Boot'
                          github='https://github.com/aradbivas/Music-Restfull-Api'

                    />

                <Card img={garage}
                      title='Garage Management System'
                      paragraph="Manages different type of vehicles in the garage, from changing repair status to handling payments. "
                      stack='Build using C# and .Net'
                      github='https://github.com/aradbivas/Garage-Mangment-System'

                />
                <Card img={gamers}
                      title='Gamers Socials'
                      paragraph='Choose your favorites games to play, join a custom game chat and find you gaming body!'
                      stack='Developed using Java Firebase in Android Studio'
                      github='https://github.com/aradbivas/Gamers-Social-Android-App'
                      live = "https://user-images.githubusercontent.com/41302200/201333369-1c7b1f74-d47b-4c0c-bed6-6b88fd7d90d4.mp4"

                />
                <Card img={bulleyes}
                      title='Bullseye Game'
                      paragraph='The Game chooses a sequence of four colors in certain order, to win you need choose the right colors and place them in the right space.'
                      stack='Developed using C# .NET framework and WinForms'
                      github='https://github.com/aradbivas/BullEyes-Game'
                      live = "https://user-images.githubusercontent.com/41302200/201338646-e8d2368d-e2ee-433f-86d5-496a9184f26d.mp4"

                />
                <Card img={menu}
                      title='Menus Creator'
                      paragraph='Menu creator component to help developers creat their own custom menus'
                      stack='Developed using C# and .NET framework.'
                      github='https://github.com/aradbivas/Menus-Creator'
                />
                <Card img={server}
                      title='TCP Server'
                      paragraph="Java TCP server, creates matrices and weighted matrices, and solve problems using graph's algorithms"
                      stack='Developed in Java, using Threads and WebSockets.'
                      github='https://github.com/aradbivas/java-TCPserver-project'
                />
                <Card img={rating}
                      title="Game's Rating"
                      paragraph="Data science project, using to get information about games and what affects their overall rating."
                      stack='Developed using Python, Web crawling using Selenium and BeautifulSoup, Pandas and Numpy.'
                      github='https://github.com/aradbivas/Data-Science-Games-Rating'
                />
            </div>
        </div>
    )
}

export default Projects;