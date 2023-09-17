import React from 'react';
import "../App.css"

const Places = (props) => {
    return (
            <div className="places">
                <img className='img' src={props.img} alt="" />
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
                <button className='button'>Directions</button>
            </div>
    );
}

export default Places;
