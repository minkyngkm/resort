import React from 'react';

function Room({room}){
    const {images} = room
    return (

        <article> 
            <div className="img-container"> 
                <img src={images[0]} alt="single room"/>
            </div>    
        </article>
    )
}

export default Room;
