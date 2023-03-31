import React from "react";

import { useState,useEffect } from "react";

import axios  from "axios";

import AssetContainer from "./AssetContainer";

import './index.css'



const MiddleBody = ()=>{

   useEffect(()=>{
       
         axios.get('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))
    
   },[])

    return(
        <div className="main-container-middlebody">
           
           <div className="heading-container-mainbody">
               <div className="mainbody-heading-text">
                      <p>Technical Project Management</p>
               </div>
               <div className="heading-button-container-mainbody">
                    <button  type="button" className="heading-button-mainbody">Submit Task</button>
               </div>
           </div>

           <div className="description-container-mainbody">
                 <h1>Explore the world of management</h1>
                 <p>As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
           </div>
           <div className="container-assetcontainer">
           <AssetContainer />
           </div>
           
        </div>
    )
}


export default MiddleBody;