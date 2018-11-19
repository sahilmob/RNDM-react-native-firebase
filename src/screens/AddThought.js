import React, { Component } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Form, Item, Input, Button, Text } from "native-base";
import firebase from "react-native-firebase";

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
		type: "funny",
		username: "",
		thought: "",
		formValid: false
	};

	// componentDidMount() {
	// 	firebase
	// 		.auth()
	// 		.signInAnonymously()
	// 		.then(user => {
	// 			console.log(user);
	// 		});
	// }

	handleTypeChange = type => {
		this.setState({
			type
		});
	};

	handleTextChange = (key, value) => {
		this.setState(
			{
				[key]: value
			},
			() => {
				//Destructured username and thoughts here instead for the beginning of the method to get the latest value for them
				const { username, thought } = this.state;
				if (username.length > 0 && thought.length > 0) {
					this.setState({
						formValid: true
					});
				} else {
					this.setState({
						formValid: false
					});
				}
			}
		);
	};

	handleSubmit = () => {
		const { username, thought, type } = this.state;
		const {
			navigation: { navigate }
		} = this.props;
		const ref = firebase
			.firestore()
			.collection("thoughts")
			.add({
				username,
				thought,
				category: type,
				date: new Date(),
				numLikes: 0,
				numComments: 0
			})
			.then(result => {
				navigate("Home");
				this.setState({
					type: "funny",
					username: "",
					thought: "",
					formValid: false
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		const { type, username, thought, formValid } = this.state;
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
				<View style={styles.form}>
					<Form>
						<Item>
							<Input
								placeholder="Username"
								value={username}
								onChangeText={value => {
									this.handleTextChange("username", value);
								}}
							/>
						</Item>
						<Item>
							<Input
								multiline={true}
								numberOfLines={5}
								placeholder="Your random thought"
								value={thought}
								onChangeText={value => {
									this.handleTextChange("thought", value);
								}}
							/>
						</Item>
					</Form>
					<View style={styles.submitBtnContainer}>
						<Button
							style={styles.submitBtn}
							disabled={!formValid}
							onPress={this.handleSubmit}
						>
							<Text>Submit</Text>
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = ScaledSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: "10@s"
	},
	type: {
		flexDirection: "row",
		marginTop: "10@s",
		justifyContent: "space-between"
	},
	form: {
		marginTop: "20@s"
	},
	submitBtnContainer: {
		justifyContent: "center",
		marginTop: "10@s",
		flexDirection: "row"
	},
	submitBtn: {
		backgroundColor: "#F5820c",
		paddingHorizontal: "20@s"
	}
});
