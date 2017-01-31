var nextTodoId = 0;

export const addCard = (text) => {
	return {
		type: 'ADD_CARD',
		id: nextTodoId++,
		text
	}
}


