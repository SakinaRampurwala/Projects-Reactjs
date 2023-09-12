import React from 'react'
import trollImg from '../Images/troll-face.png'
import './style.css'

export default function Header(){
    return(
        <header className='headDiv'>
            <img src={trollImg} className='headImage'/>
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}