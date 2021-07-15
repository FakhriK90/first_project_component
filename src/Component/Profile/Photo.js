import React from "react";
import Picture from "./Moi.jpg"
import './style.css';

const Photo = () => {
 return <div className="image"><img src={Picture} alt="Mine" width="400" height="350"></img>;</div>
};
export default Photo;