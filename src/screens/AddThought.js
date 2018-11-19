import React, { Component } from "react";
import { Text, View } from "react-native";

export default class AddThought extends Component {
	static navigationOptions = navProps => {
		return {
			headerStyle: {
				backgroundColor: "#363636"
			},
			headerTitle: "RNDM",
			headerTitleStyle: {
				color: "white"
			},
			headerLeft: null
		};
	};
	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
