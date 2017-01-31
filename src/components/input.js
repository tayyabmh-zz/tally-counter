import React from 'react';
import TextField from 'material-ui/TextField';

const style = {
	textAlign: 'center',
	margin: 20
}

const divStyle = {
	textAlign: 'center'
}


var TextFieldExampleSimple = React.createClass({
	render(){
		return(
	  <div style={divStyle}>
	      <TextField
	      hintText="What topic would you like to keep track of?"
	      floatingLabelText="Topic"
	      multiline={true}
	      rows={2}
	      style={style}
	      onKeyPress={this.handleKeyPress}
	    />
	  </div>
	  );
	},



	handleKeyPress(e){
		if(e.key === 'Enter') {
			console.log('laskdjf');
		}
	}

});

export default TextFieldExampleSimple;