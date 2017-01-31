import React from 'react';
import AppBar from 'material-ui/AppBar';




export default class TopBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
		console.log(this.state.open);
	}

	//Need to run this as an ES6 function otherwise it doesn't like working. 
	//Regular Function will mess it up
	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	}
	

	//Want to convert the AppBar/Drawer click and action into Redux
	//Need to create an action and a reducer, and then a container that would 
	//Contain the connecting stuff in it. Will take a while to understand
	render(){
		return(
			<AppBar
			className="top-bar"
			title="Tally Counter"
			onLeftIconButtonTouchTap={this.handleToggle}
			style={{
				width: '100%',
			}}
			/>
		);
	}	
}

