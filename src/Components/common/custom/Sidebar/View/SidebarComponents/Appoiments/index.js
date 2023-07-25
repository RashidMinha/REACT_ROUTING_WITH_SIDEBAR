import React from "react";

const Appoiments = (props) => {
    const {show} = props

  if(show){
    return(
        <div className="d-flex justify-content-center align-items-center h-100">
             <h2>Appoiments</h2>
        </div>
    )
  }
  return null
}

export default Appoiments