import React from 'react'

function Card(props) {
    return (
        <div className="card-body">
            <div>
                <div className="city">{props.CityName} </div>
                <div className="temperature">{props.temperature} <sup>&deg;</sup>C</div>

                <div className="icon"> 
                    <div> {props.description}</div>
                    <div><img src={props.icon} width="50px" alt="icon" /></div>
                 </div>
                 
            </div>
        </div>
    )
}

export default Card
