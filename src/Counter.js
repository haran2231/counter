import React, { useState } from "react";
 

function Counter(){

    const [num, setNum] = useState(0)
    var random = Math.floor(Math.random() * 100)

    function generate(){
        setNum(random)
    }



    return(
        
       <>
      <div  className={"number"}>
      <h1>{num}</h1>
       <button onClick={generate}>Generate</button>

      </div>
       </>
    )
}

export default Counter;