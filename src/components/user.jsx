import React from "react";


const User = (props) => {

	return (
		<>
			{<tr>
				<td>{props.name}</td>
				<td>
					{props.qualities.map((qualitie) => {
						return <Qualitie {...qualitie}/>
					})}
				</td>
				<td>{props.profession.name}</td>
				<td>{props.completedMeetings}</td>
				<td>{props.rate + '/5'}</td>
				<td><button className='btn text-bg-danger' onClick={()=>props.onDelete(props._id)}>delete</button></td>
			</tr>}
		</>
	);
}

export default User; 

