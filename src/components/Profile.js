import React from "react";

export default function Profile(props) {
    return (
        <div className="profile-main">
            <div className="profile-main_user">
                <img className="profile-main_user_img" src="./images/image-jeremy.png" alt="avatar" />
                <div className="profile-main_name_container">
                    <small>Report for</small>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <ul className="profile-main_period">
                <li id="Daily" className="profile-main_period_text"><a href="#daily" id="daily" onClick={props.handleChange}>Daily</a></li>
                <li id="Weekly" className="profile-main_period_text"><a href="#weekly" id="weekly" onClick={props.handleChange} >Weekly</a></li>
                <li id="Monthly" className="profile-main_period_text"><a href="#monthly" id="monthly" onClick={props.handleChange}>Monthly</a></li>
            </ul>
                        
        </div>
    )
}