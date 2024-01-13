import styled from "styled-components";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LightContext } from "../../Providers/LightConfiguration";

function Light() {
	const { blinkInterval, saturation, light } = useContext(LightContext);
	const hue = Math.floor(Math.random() * 360);
	const [lightness, setLightness] = useState(light);
	const background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	useEffect(() => {
		const interval = setInterval(() => {
			if (lightness === light) {
				setLightness(light / 2);
			} else {
				setLightness(light);
			}
		}, blinkInterval);
		return () => clearInterval(interval);
	}, [lightness]);
	return <LightStyled style={{ "--background-color": background }} />;
}
const LightStyled = styled.div`
	background-color: var(--background-color);
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;
export default Light;
