import styled from "styled-components";
import { useState } from "react";

function Light() {
	const [background, setBackground] = useState("#ffff");
	return <LightStyled style={{ "--background-color": background }} />;
}
const LightStyled = styled.div`
	background-color: var(--background-color);
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;
export default Light;
