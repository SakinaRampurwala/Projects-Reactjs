import React from 'react'

export default function Meme(){
    const [allMeme, setAllMeme] = React.useState([]);
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])
    
    const [meme, setMeme]= React.useState({topText:'' , bottomText:'' , randomImage:'https://i.imgflip.com/2fm6x.jpg'})
    function getMemeImage(){
        let randomNumber=Math.floor(Math.random() *  allMeme.length);
        let imageUrl=allMeme[randomNumber].url;
        setMeme(prevData=>{
            return{
                ...prevData,
                randomImage:imageUrl
            }
        })
        console.log(meme);

    }
    function handleChange(event){
        let {name, value}=event.target;
        setMeme(prevData=>{
            return{
                ...prevData,
                [name]:value
            }
        })

    }

    return(
        <main>
        <div className="form">
            <input   type="text" placeholder="Top text"  className="form--input"   name="topText"  value={meme.topText}  onChange={handleChange} />
            <input   type="text" placeholder="Bottom text"  className="form--input" name="bottomText"  value={meme.bottomText}  onChange={handleChange} />
            <button  className="form--button"  onClick={getMemeImage} >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    )
}



