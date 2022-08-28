import React from 'react';


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

// const Qualitie = ({ color, name, id }) => {
// 	return (
// 		<>
// 			{<span className={'badge m-1 text-bg-' + color} key={id}>{name}</span>}
// 		</>
// 	);
// };

// export default Qualitie; 