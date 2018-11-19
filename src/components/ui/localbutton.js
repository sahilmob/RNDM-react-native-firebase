import React from "react";
import { Text, Button } from "native-base";
import { ScaledSheet } from "react-native-size-matters";

export default (LocalButton = ({ text, clickHandler, activeType }) => {
	return (
		<Button
			style={activeType === text.toLowerCase() ? styles.btnActive : styles.btn}
			onPress={() => {
				clickHandler(text.toLowerCase());
			}}
		>
			<Text style={styles.txt}>{text}</Text>
		</Button>
	);
});

const styles = ScaledSheet.create({
	btn: {
		backgroundColor: "#F5820c",
		paddingHorizontal: "20@s",
		opacity: 0.5
	},
	btnActive: {
		backgroundColor: "#F5820c",
		paddingHorizontal: "20@s"
	},
	txt: {
		color: "white"
	}
});
