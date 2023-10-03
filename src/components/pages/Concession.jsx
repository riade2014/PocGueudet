import React from "react";

function Concession(){
    const fruits=["Orange","Pommes","Clementine","Banane"];
    //const fruit= fruits.map((item,index) => <li key={index}>{item}</li>)
    return(
        <div>
            <ul>
                {
                    fruits.map((item,index) =>
                    <li key={index}>{item}</li>
                    
                )}
            </ul>
        </div>
    );
}

export default Concession;