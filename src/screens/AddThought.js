import React, { Component } from "react";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Button } from "native-base";
import LocalButton from "../components/ui/localbutton";

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

	state = {
		type: "funny"
	};

	handleTypeChange = type => {
		this.setState({
			type
		});
	};

	render() {
		const { type } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.type}>
					<LocalButton
						text="FUNNY"
						activeType={type}
						clickHandler={this.handleTypeChange}
					/>
					<LocalButton
						text="SERIOUS"
						activeType={type}
						clickHandler={this.handleTypeChange}
					/>
					<LocalButton
						text="CRAZY"
						activeType={type}
						clickHandler={this.handleTypeChange}
					/>
				</View>
			</View>
		);
	}
}

const styles = ScaledSheet.create({
	container: {
		paddingHorizontal: "10@s"
	},
	type: {
		flexDirection: "row",
		flex: 1,
		marginTop: "10@s",
		justifyContent: "space-between"
	}
});
