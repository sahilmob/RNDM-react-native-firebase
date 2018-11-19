import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./src/screens/Home";
import AddThought from "./src/screens/AddThought";

const AppNavigation = createStackNavigator({
	Home: {
		screen: Home
	},
	AddThought: {
		screen: AddThought
	}
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
