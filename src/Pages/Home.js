import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='mainmenu'>
            <h1>TIC-TAC-TOE</h1>
            <button className='btns'><Link className='lnks' to='/singleplayer'>Singleplayer</Link></button>
            <button className='btns'><Link className='lnks' to='/multiplayer'>Multiplayer</Link></button>
        </div>
    )
}

export default Home