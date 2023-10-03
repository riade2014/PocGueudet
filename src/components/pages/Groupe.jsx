import React from "react";
import {useState} from 'react';
import { Button } from "@mui/material";

function Groupe(){
    const [counter, setCounter] = useState(0);
    function increase(){
        
        if(counter=== 0 || counter<=10){
            setCounter(count => count +1);
        }
    };

    function decrease(){
        if(counter!==0){
            setCounter (count => count -1);
        }
        
    };

    return(
        <div>
            <Button onClick={increase}>
                +
            </Button>
            <Button onClick={decrease}>
                -
            </Button>
            <h1> le nombre de clic est de : {counter}</h1>
        </div>
    );
}

export default Groupe;