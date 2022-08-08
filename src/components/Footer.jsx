import React from 'react'

const footer = () => {
  return (
    <div className='Footer'>
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
  )
}

export default footer