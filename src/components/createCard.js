import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
	position: "fixed",
	bottom: 0,
	right: 0,
	margin: 10
}


const FAB = () => (
	<div>
		<FloatingActionButton style={style}>
			<ContentAdd />
		</FloatingActionButton>
	</div>
);


export default FAB;

