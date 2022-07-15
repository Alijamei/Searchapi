import { faPersonMilitaryToPerson } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import "./apidetails.css"

function ApiDetails(props){
     return(
        <div className="apidiv">
             <h3>{props.api}</h3>
             <p className="details">{props.description}</p>
             <a href ={props.link} id="a">Link here</a>
             <p className="category">{props.category}</p>
        </div>
     )

}
export default ApiDetails