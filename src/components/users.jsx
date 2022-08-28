import React, { useState } from 'react';
import api from '../api';
import renderPhrase from './searchStatus';
import renderQualities from './qualitie';
import bookmark from './bookmark';
// import Pagination from './pagination';
// import user from './user';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
      setUsers(users.filter((user) => user._id !== userId));
  };

  
  return (
      <>
          <h2>
              <span
                  className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
              >
                  {users.length > 0
                      ? `${users.length + " " + renderPhrase(users.length)} с тобой сегодня`
                      : "Никто с тобой не тусанет"}
              </span>
          </h2>

          {users.length > 0 && (
              <table className="table">
                  <thead>
                      <tr>
                          <th scope="col">Имя</th>
                          <th scope="col">Качества</th>
                          <th scope="col">Профессия</th>
                          <th scope="col">Встретился, раз</th>
                          <th scope="col">Оценка</th>
                          <th scope="col">Избранное</th>
                          <th />
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user) => (
                          <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{renderQualities(user.qualities)}</td>
                          <td>{user.profession.name}</td>
                          <td>{user.completedMeetings}</td>
                          <td>{user.rate} /5</td>
                          <td>{bookmark}</td>
                          <td>
                              <button
                                  onClick={() => handleDelete(user._id)}
                                  className="btn btn-danger"
                              >
                                  delete
                              </button>
                          </td>
                      </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </>
  );
};

export default Users;
