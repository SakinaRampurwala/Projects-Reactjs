import React from 'react'
import'./style.css'
export default function TicTac(){

    function handleClick(event){
        
    }
    return(
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col items-center">
            <h1 className="text-center text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">This is a Heading 1</h1>
            <div className='grid grid-rows-[100px_100px_100px] grid-cols-[100px_100px_100px] grid-flow-col mt-6 '>
                <div className="border border-sky-500" onClick={handleClick} id='box1'></div>
                 <div className="border border-sky-500" onClick={handleClick} id='box2'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box3'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box4'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box5'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box6'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box7'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box8'></div>
                <div className="border border-sky-500" onClick={handleClick} id='box9'></div> 
            </div>
        </div>
    )

}