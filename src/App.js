import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import FilterTask from './components/FilterTask';
import TotalCompleteItems from './components/TotalCompleteItems';


const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Task List</h1>
			<AddTask/>
			<FilterTask/>
			<ListTask />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
