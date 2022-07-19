import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
      let newUsers = users.filter(user => user._id !== userId)
      setUsers(newUsers)

    };
    const renderPhrase = (number) => {
      

    };
  console.log(users);
  const renderQualities = (qualities) => {
    return qualities.map((qualitie) => {
      return (
        <span key = {qualitie._id} className = {`badge bg-${qualitie.color} m-1`}>
          {qualitie.name}
        </span> 
      )
    })
  }
  let usersInfo = users.map((item) => {
    return (
       <tr key = {item._id}>
        <td>{item.name}</td>
        <td>{renderQualities(item.qualities)}</td>
        <td>{item.profession.name}</td>
        <td>{item.completedMeetings}</td>
        <td>{item.rate}</td>
        <td>
          <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>delete</button>
        </td>
      </tr>
     
    )
    
    })
    return (
        <>
        <h2>
            <span className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}>
            {renderPhrase}
            </span>
        </h2>
        <table className='table'>
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился, раз</th>
      <th scope="col">Оценка</th>
      <th scope="col"></th>
    </tr>
  </thead>
<tbody>
  {usersInfo}
</tbody>

  </table>
  </>
    )
};

export default Users;