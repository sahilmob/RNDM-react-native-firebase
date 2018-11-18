import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Left, Right, Fab } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScaledSheet } from "react-native-size-matters";
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header style={styles.header}>
					<Left style={styles.headerLeft}>
						<Text style={styles.headerText}>RNDM</Text>
					</Left>
					<Right style={styles.headerRight}>
						<Icon name="ellipsis-v" color="white" />
					</Right>
				</Header>
				<Fab position="bottomRight" style={styles.fab}>
					<Icon name="envelope" />
				</Fab>
			</View>
		);
	}
}

const styles = ScaledSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	header: {
		width: "100%",
		backgroundColor: "#363636"
	},
	headerLeft: {
		marginLeft: "10@s"
	},
	headerRight: {
		marginRight: "10@s"
	},
	headerText: {
		color: "white"
	},
	fab: {
		backgroundColor: "#F5820c"
	}
});
