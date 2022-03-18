import React from "react";
import { withKnobs, array, select } from "@storybook/addon-knobs";

import Navigation from "./Navigation";

import knobData from "./navigation.knobs.json";
const { direction, items } = knobData;

export const horizontalNavigation = () => (
	<Navigation
		direction={select(
			direction.label,
			direction.options,
			direction.default,
			direction.group
		)}
		items={array(items.label, items.default, items.group)}
	/>
);

export const verticalNavigation = () => (
	<Navigation
		direction={select(
			direction.label,
			direction.options,
			"vertical",
			direction.group
		)}
		items={array(items.label, items.default, items.group)}
	/>
);

/* eslint import/no-anonymous-default-export: */
export default {
	component: Navigation,
	decorators: [withKnobs],
	title: "Molecules|Navigation"
};