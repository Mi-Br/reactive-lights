import React from "react";
import styled from "styled-components";
import { LightContext } from "../../Providers/LightConfiguration";

function ControlPanel() {
	const { setHue, setBlinkInterval, setSaturation, setLight } =
		React.useContext(LightContext);
	return (
		<StyledControlPanel>
			<form>
				<label htmlFor="hue">Hue</label>
				<input
					type="range"
					id="hue"
					name="hue"
					min="0"
					max="360"
					onChange={(e) => setHue(e.target.value)}
				/>
				<label htmlFor="saturation">Saturation</label>
				<input
					type="range"
					id="saturation"
					name="saturation"
					min="0"
					max="100"
					onChange={(e) => setSaturation(e.target.value)}
				/>
				<label htmlFor="light">Light</label>
				<input
					type="range"
					id="light"
					name="light"
					min="0"
					max="100"
					onChange={(e) => setLight(e.target.value)}
				/>
				<label htmlFor="blinkInterval">Blink Interval</label>
				<input
					type="range"
					id="light"
					name="blinkInterval"
					min="0"
					max="100"
					onChange={(e) => setBlinkInterval(e.target.value)}
				/>
			</form>
		</StyledControlPanel>
	);
}

export default ControlPanel;

const StyledControlPanel = styled.div`
	position: fixed;
	bottom: 10px;
	padding: 10px;
	border-radius: 10px;
	margin-inline: auto;
	background-color: #333;

	form {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	form label {
		margin: 4px;
	}
`;
