import React from 'react';
import TopBar from './TopBar';
//import SideBar from './SideBar';
import FAB from './createCard';
import CardList from './CardList';
import TextFieldExampleSimple from './input';

export default class Layout extends React.Component {
	render(){
		return (
			<div>
				<TopBar />
				<TextFieldExampleSimple />
				<CardList />
				<FAB />
			</div>
		);
	}
}