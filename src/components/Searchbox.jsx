import React from "react"

const Searchbox = ({onfilter})=>{
    return(
        <div className="searchbox">
        <input
        placeholder="Search Robots"  
        type="text"
        onChange={onfilter} />

        
        </div>
    )
}
export default Searchbox