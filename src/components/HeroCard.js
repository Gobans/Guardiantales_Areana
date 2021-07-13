import React, {useState } from "react";

const HeroCard= (props) =>{
    
    let { heroName } = props;

    return(
        <>
        <p>
            {heroName}
        </p>
        </>
    )
}



export default HeroCard