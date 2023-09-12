import React from 'react'
export default function Square({value , onSquareClick, id }){


    let btnStyle = {
        backgroundColor:'#06373A',
        boxShadow:'0 5px 2px rgb(0 0 0)',
        fontSize:'2.5rem'
    };

    if(value == 'X'){
        btnStyle={
            ...btnStyle,
            // color:'rgb(165 216 219)',
            color:'#01170d',

            
            
        }

    }else{
        btnStyle={
            ...btnStyle,
            color:'#ffae42',

        }
    }

   

    return(
        <>
            <button style={btnStyle} id={id} className='rounded font-bold text-2xl[2.5rem]'  onClick={onSquareClick}>{value}</button>
        </>
    )

}