import React from 'react'

const footer = () => {
  return (
    <div className='Footer'>
      
        <div className='footerContainer footerA'>
        <ul className='footerList'>
            <h3>Credit to</h3>
            <li>
                <a target="blank" href='https://openweathermap.org/'>Open Weather Api</a>
            </li>

            <li>
                <a target="blank" href='https://git-scm.com/'>Git</a>
            </li>

            <li>
                <a target="blank" href='https://github.com/'>Github</a>
            </li>

            <li>
                <a target="blank" href='https://pages.github.com/'>Github Pages</a>
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
    <div className='Up'>
        <a href="#top">Up</a>
        </div>
    <h3>Project Datails</h3>   
    <p>
    This app based in React JS was realized by <a target="blank" href='https://www.linkedin.com/in/luis-fernando-g%C3%B3mez-mateo-156443209/'>Luis Fernando Gómez</a> as a task for the Teacher <a target="blank" href='https://www.linkedin.com/in/benjamin-flores-48541182/'>Benjamin Flores</a>. it was an important requirement for <a target="blank" href='https://www.academlo.com/'>Academlo</a>.
    </p> 
    
        <h4>Features</h4>
        <p>
        <li>Ease Change Between Celsius and Fahrenheit</li>
        <li>All weather data</li>
        <li>This app changes the background of the video based on the weather, if the video doesn't load then it's done with a less sized loaded image</li>
        <li>Weather data depends on the user's location</li>
        <li>beautiful scroll according to the theme</li>
        <li>Responsive</li>
    </p> 
    </div>
    
    </div>
)
}

export default footer