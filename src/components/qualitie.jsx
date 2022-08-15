import React from 'react';
// import api from "../api";
// import users from './users';


const RenderQualities = (qualities) => {
    return qualities.map((qualitie) => {
      return (
        <span key = {qualitie._id} className={`badge bg-${qualitie.color} m-1`}>
          {qualitie.name}
        </span> 
      )
    })
  };
  export default RenderQualities;
