import React, { Component } from "react";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

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
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.type}>
					<LocalButton text="Funny" />
					<LocalButton text="SERIOUS" />
					<LocalButton text="CRAZY" />
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
		backgroundColor: "red",
		flex: 1,
		justifyContent: "space-between",
		marginTop: "10@s"
	}
});
