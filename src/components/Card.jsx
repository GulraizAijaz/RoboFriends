import React from 'react';

const Card = ({ name, email, id, }) =>{
    return(
        <>
        <div className='Card-robot'>
            <img alt='robots' src={`https://robohash.org/${id}`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            
            </div>
        </div>
        
        </>
    )
}
export default Card;