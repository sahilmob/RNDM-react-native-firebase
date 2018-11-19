import React, { Component } from "react";
import { TouchableNativeFeedback, Text, View } from "react-native";
import { Header, Left, Right, Fab, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScaledSheet, scale } from "react-native-size-matters";
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header style={styles.header}>
					<Left style={styles.headerLeft}>
						<Text style={styles.headerText}>RNDM</Text>
					</Left>
					<Right style={styles.headerRight}>
						<TouchableNativeFeedback>
							<View style={styles.ellipsisBtn}>
								<Icon name="ellipsis-v" color="white" />
							</View>
						</TouchableNativeFeedback>
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
	ellipsisBtn: {
		width: scale(20),
		height: scale(20),
		backgroundColor: "#1e1e1e",
		borderRadius: scale(10),
		alignItems: "center",
		justifyContent: "center"
	},
	fab: {
		backgroundColor: "#F5820c"
	}
});
