import React from 'react'
import Square from './Square'
import CalculateWinner from './CalculateWinner'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faRotateRight } from '@fortawesome/free-solid-svg-icons';


export default function Board(){        
    let[isNext, setIsNext]= React.useState('X');
    let [square, setSquare]=React.useState(Array(9).fill(null));
    let showWinnerPopup=false;

    function handleClick(i){
        if(square[i] || CalculateWinner(square)){
            return;
        }
        let newArray=[...square];
        if(isNext == 'X'){
            newArray[i]='X';
            setIsNext(isNext ='O');

        }else{
            newArray[i]='O';
            setIsNext(isNext ='X');

        }

        setSquare(() =>{
            return newArray;
        } );
    }

    const winner = CalculateWinner(square);
    console.log(winner);
    let status;
    if (winner) {
         status = "Winner: " + winner;
         showWinnerPopup=true;
    } else {
        // status = (isNext ? "O" : "X") + ' - Turn';
        showWinnerPopup=false;
    }

    function handleReset(){
        let newArray=[...square];
        newArray=Array(9).fill(null);
        setSquare(newArray);
        setIsNext(isNext ='X');

    }

    return(
        
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col items-center relative">   
        
            {
                showWinnerPopup &&  
                <div className="bg-white rounded-lg p-6 ring-1 ring-slate-900/5 shadow-xl absolute top-1/2  w-7/12">
                    <h3 className='grid place-content-center text-2xl	 text-[#01170d] font-extrabold'>{winner} - TAKES THE ROUND</h3>
                    <div className='grid gap-2 mt-4  grid-cols-[100px_100px] place-content-center'> 
                        <button className="rounded-md bg-[#ebebeb] py-2 px-3 text-sm text-[#01170d]" onClick={handleReset}>Quit</button>
                        <button className="rounded-md bg-[#ffae42] py-2 px-3 text-sm text-[#01170d] " onClick={handleReset}>Next Round</button>
                    </div>
                </div>
            }
            
            <div class="grid gap-2 my-4 grid-cols-[100px_100px_100px] ">
                <div class="p-2 px-4 cursor-pointerrounded justify-self-center"></div>
                <div class="p-2   cursor-pointer statusBox rounded justify-self-center">{!winner? `${isNext} - Turn` : 'Game Over'}</div>
                <div class="p-2 px-4  cursor-pointer resetBtn rounded justify-self-end" onClick={handleReset}><FontAwesomeIcon icon={faRotateRight} className="fa-rotate-right " /></div>
            </div>
            <div className='flex justify-center gap-4 grid grid-rows-[100px_100px_100px] grid-cols-[100px_100px_100px] grid-flow-col mt-6 '>
                {
                    square.map((element , index)=> {
                        return <Square id={index}  key={index} value={element} onSquareClick={()=>handleClick(index)} />
                        
                    })
                }
            </div>
        </div>
    )

}