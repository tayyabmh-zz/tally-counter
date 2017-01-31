import React from 'react';
import CardExampleExpandable from './card';


var exampleListofCards = [
	{ title: 'Operations Management', id: 1, tally: 0 },
	{ title: 'Agile Development', id: 2, tally: 0 },
	{ title: 'Redux', id: 3, tally: 0 },
	{ title: 'LinkedIn Shit', id: 4, tally: 0 },
	{ title: 'Cooking', id: 5, tally: 0 },
];


const CardList = (exampleListofCards) => (
	<ul>
		{exampleListofCards.map(card => {
			<CardExampleExpandable
				key={card.id}
				title={card.title}
			/>
		}
		)}
	</ul>
);


export default CardList;