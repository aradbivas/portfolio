import React from 'react'
import './astrunaut.png'
import astro from './astrunaut.png'
import github from './github.png'
import linkedin from './linkedin.png'
const AboutMe = () => {
    return    (
        <div className='about-me'>
               <div className='astro-container'>
                   <img className='img-ast'src={astro} alt=''/>
               </div>
                <div className='para-container'>
                    <h1 className='about-me'>About me!</h1>
                    <br/>
                    <p>
                        I am a Software Developer located in Israel with background <br/>
                        in back-end and full stack developing looking to leave my impact on the industry.
                    </p>
                    <br/>
                    <p className='para'>

                        Technology has been a passion of mine since I was a child,
                        with the curiosity to learn how things work, and being a gamer,
                        I spent my time between playing games and fixing things when bugs appeared.
                        both software and hardware wise.
                        so naturally I looked for a job that I can use my skills,
                        I worked as a help desk technician,
                        but it wasn't enough for me, I wanted to know more how things work!
                        so I decided to study computer science.
                    </p>
                    <br/>
                    <p  className='para'>
                        During my degree i learned how to write clean and efficient code,
                        design and develop large-scale projects, using Object Oriented Programing and SOLID principles,
                        <br/>
                        As a result of my study
                        I developed a self-learning and problem-solving skill set,
                        along side the developing skill combined with my problem solving ability,
                        I believe that every problem can be solved, and thinking outside the box is my philosophy.
                    </p>
                    <br/>
                    <div className='link-container'>
                        <a href='https://github.com/aradbivas'><img src={github} className='links'/></a>
                        <a href='https://www.linkedin.com/in/arad-bivas/'><img src={linkedin} className='links'/></a>
                    </div>

                </div>

            </div>)
}

export default AboutMe;
