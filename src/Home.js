import React from "react";
import Counter from "./Counter";
import './style.css'; 

function Home(){
    return(
        <>
            <h1 className={"title"}>Counter</h1><br/>
            <Counter></Counter>
        </>
    )
}

export default Home