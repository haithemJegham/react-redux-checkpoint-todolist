import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	 const completedTodos = useSelector((state) => state.todos.filter((todo)=>todo.isDone===true));
	 const completedTodos1 = useSelector((state) => state.todos.filter((todo)=>todo.isDone===false));

	return <h4 className='mt-3'> Items done : {completedTodos.length} //
	
	items not done: {completedTodos1.length}
	</h4>;
		
};

export default TotalCompleteItems;	
