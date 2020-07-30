import React, { Component } from 'react';
import './trafficlight.css';
import classNames from 'classnames';

	const Red =1;
	const Orange =2; 
	const Green = 3;

class TrafficLight extends Component{
	constructor(){
		super();
		this.state = {
			currentColor : Red
		};
		setInterval(() => {
			this.setState({
				currentColor : this.getCurrentColor(this.state.currentColor)
			});
		}, 1000);
	}
	getCurrentColor (color){
		switch (color){
			case Red : return Orange;
			case Orange : return Green;
			case Green : return Red;
		}
	}
	render(){
		const {currentColor} = this.state;
		return (
			<div className="TrafficLight">
				<div className={classNames('bulb' , 'Red' ,{ active : currentColor === Red})}> </div>
				<div className={classNames('bulb' , 'Orange' , { active : currentColor === Orange})}> </div>
				<div className={classNames('bulb' , 'Green' , { active : currentColor === Green})}> </div>
			</div>
		);
	};
};

export default TrafficLight;