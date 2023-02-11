import React from "react";

export default function Card(props) {
    return (
        <div className="card-main">
            <div style={{background: `${props.bg} url(./images/${props.img}) no-repeat 90% center`}} className="card-main_upper">
                
            </div>
            <div className="card-main_lower">
                <div className="card-main_lower_container">
                    <div className="card-main_type_container">
                        <h3>{props.title}</h3>
                        <img className="dots" src="./images/icon-ellipsis.svg" alt="#" />
                    </div>
                </div>
                <div className="card-main_time_container">
                    <p className="card-main_lower_current">{props.current}hrs</p>
                    <p className="card-main_lower_previous">Last Week - {props.previous}hrs</p>
                </div>
            </div>
        </div>
    )
}