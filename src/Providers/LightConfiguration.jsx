import React from "react";
import { useState } from "react";

export const LightContext = React.createContext();

function LightConfiguration({ children }) {
	const [blinkInterval, setBlinkInterval] = useState(
		Math.floor(Math.random() * 10) + 1
	);
	const [light, setLight] = useState(40);
	const [hue, setHue] = useState(() => Math.floor(Math.random() * 360));
	const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100));

	// I should be able to set blinkig interval, hue and saturation

	const configuration = {
		blinkInterval,
		setBlinkInterval,
		hue,
		setHue,
		saturation,
		setSaturation,
		light,
		setLight,
	};

	return (
		<LightContext.Provider value={configuration}>
			{children}
		</LightContext.Provider>
	);
}

export default LightConfiguration;
