const card = (state ={}, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return {
				id: action.id,
				text: action.text,
				tally: 0
			}
		default:
			return state
	}
}



const cards = (state = [], action) => {
	switch(action.type) {
		case 'ADD_CARD':
			return [
				...state,
				card(undefined, action)
			]
		default:
			return state;
	}
}

export default cards;