import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Left, Right } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header style={styles.header}>
					<Left>
						<Text style={styles.headerText}>RNDM</Text>
					</Left>
					<Right>
						<Icon name="ellipsis-v" color="white" />
					</Right>
				</Header>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	header: {
		width: "100%",
		backgroundColor: "#363636"
	},
	headerText: {
		color: "white"
	}
});
