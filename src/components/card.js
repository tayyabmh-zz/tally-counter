import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';



const CardExampleExpandable = (props) => {
	return(
		<Card>
			<CardHeader
				title={this.props.title}
			/>
			<CardActions>
				<RaisedButton
					label="Increment"
					primary={true}
				/>
			</CardActions>
			<CardText>
				{this.props.tally}
			</CardText>
		</Card>
	);
}

{// class CardExampleExpandable extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			counter: 0
// 		}
// 	}

// 	handleClick(e) {
// 		this.setState({
// 			counter: this.state.counter+1
// 		});
// 	}


// 	render(){
// 		return(
// 			<Card>
// 				<CardHeader
// 				title="Agile Development"
// 				/>
// 				<CardActions>
// 					<RaisedButton 
// 						label="Increment"
// 						primary={true}
// 						onClick={this.handleClick.bind(this)} />
// 				</CardActions>
// 				<CardText>
// 					{this.state.counter}
// 				</CardText>
// 			</Card>
// 		);
// 	}
// }
}

export default CardExampleExpandable;