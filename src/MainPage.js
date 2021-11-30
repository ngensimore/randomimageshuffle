import React, {useState} from 'react';
import Image from "./Image";
import './App.css';

function MainPage(){
   const [link,setLink] = useState("https://picsum.photos/200"); 
   const [seed,setSeed] = useState(0); 
   
    function getImage() {

        setSeed(seed + 1);
        setLink("https://picsum.photos/seed/" + seed + "/200");

    }

    return (
        <div>
            <Image link = {link} />
            <button type = "button" onClick={getImage} className = "button">Next</button>
        </div>
    )

}

export default MainPage