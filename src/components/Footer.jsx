import React from 'react'

const footer = () => {
  return (
    <div className='Footer'>
        <div className='Up'>Up</div>
        <div className='footerContainer footerA'>
        <ul className='footerList'>
            <h3>Credit to</h3>
            <li>
                <a href='https://openweathermap.org/'>Open Weather Api</a>
            </li>

            <li>
                <a href='https://git-scm.com/'>Git</a>
            </li>

            <li>
                <a href='https://github.com/'>Github</a>
            </li>

            <li>
                <a href='https://pages.github.com/'>Github Pages</a>
            </li>
        </ul>


        <ul className='footerList'>
            <h3>Used Technologies</h3>
            <li>
                <a href='#'>HTML</a>
            </li>

            <li>
                <a href='#'>JSX</a>
            </li>

            <li>
                <a href='#'>JavaScript</a>
            </li>

            <li>
                <a href='#'>CSS</a>
            </li>
        </ul>
    </div>
    <div className='footerContainer footerB'>
    <h3>Project Datails</h3>   
    <p>
    This app based in React JS was realized by Luis Fernando Gómez as a task for the Teacher <a href='https://www.linkedin.com/in/benjamin-flores-48541182/'>Benjamin Flores</a>. it was an important requirement for <a href='https://www.academlo.com/'>Academlo</a>.
    </p> 
    </div>

    </div>
  )
}

export default footer