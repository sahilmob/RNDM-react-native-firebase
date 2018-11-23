import React, { Component } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Form, Item, Input, Button, Text, Fab } from "native-base";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/FontAwesome5";

import LocalButton from "../components/ui/localbutton";

export default class Home extends Component {
	static navigationOptions = navProps => {
		return {
			headerStyle: {
				backgroundColor: "#363636"
			},
			headerTitle: "RNDM",
			headerTitleStyle: {
				color: "white"
			}
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
					<LocalButton
						text="POPULAR"
						activeType={type}
						clickHandler={this.handleTypeChange}
					/>
				</View>
				<Fab
					position="bottomRight"
					style={styles.fab}
					onPress={() => {
						this.props.navigation.navigate("AddThought");
					}}
				>
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
	type: {
		flexDirection: "row",
		marginTop: "10@s",
		justifyContent: "space-between"
	},
	fab: {
		backgroundColor: "#F5820c"
	}
});
