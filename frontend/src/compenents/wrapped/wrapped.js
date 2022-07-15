import react, { useState } from "react"
import "./wrapped.css"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import ApiDetails from "../apidetails/apidetails";

const element = <FontAwesomeIcon icon={faSearch} />

function Wrapped(){
    const[apiname,setapiname] = useState("")
    const[respdata,setdata] = useState("")
    function handlechange(event){
             setapiname(event.target.value)
    }
    function handlesubmit(event) {      
            event.preventDefault();
           
            axios
              .post(
                "http://localhost:5000/" ,{api:apiname})
               .then(res => {    
                        setapiname("")       
                        setdata(res.data)
              })
               .catch((err) => {
                    console.log(err)
                    console.log('error here')                  
              });  
          }
    return(
       <div>
        <div class="wrapper">
          <form onSubmit={handlesubmit}>
            <div class="searchbox">
                <div class="search_btn">{element}</div>
                 <input type="text" class="inputsearch" placeholder="Which api?" value = {apiname} onChange = {handlechange}  />
             </div>
            </form>
        </div>
        
        {
            respdata != "" ?
            respdata.map((x) => (
                    <ApiDetails
                         api = {x.api}
                         description = {x.description}
                         link = {x.link}
                         category = {x.category}            
                     />
                 
                 )) 
             : 
              false} 
       
        </div> 
       
    )
}
export default Wrapped

