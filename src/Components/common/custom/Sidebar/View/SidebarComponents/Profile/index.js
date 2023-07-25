import React from "react";

const Profile = (props) => {
   const {show} = props
   
   if(show){
       return (
           <>
               <div  className="d-flex justify-content-center align-items-center h-100">
                 <h2>Profile</h2>
               </div>
           </>
       )
   }
   return null
}

export default Profile