import React from "react";
import { Text } from "react-native";
import { Button } from "native-base";
import { ScaledSheet } from "react-native-size-matters";

export default (LocalButton = ({ text, clickHandler = () => null }) => {
	return (
		<Button style={styles.btn} onPress={clickHandler}>
			<Text style={styles.txt}>{text}</Text>
		</Button>
	);
});

const styles = ScaledSheet.create({
	btn: {
		backgroundColor: "#F5820c",
		paddingHorizontal: "20@s"
	},
	txt: {
		color: "white"
	}
});
