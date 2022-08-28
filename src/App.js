import React, { useState } from 'react';
import Users  from './components/users';
import RenderPhrase from './components/searchStatus';
import api from './api/index.js';


const App = () => {
	const [users, setUsers] = useState(api.users.fetchAll());


	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter(user => user._id !== userId))
	};

	return (
		<>
			<RenderPhrase length={users.length}/>
			<Users users={users} onDelete={handleDelete}/>
		</>
	);
};

export default App; 