import React from "react";
import styled from "styled-components";
import Grid from "../Grid/Grid";
import LightConfiguration from "../../Providers/LightConfiguration";
import ControlPanel from "../ControlPanel/ControlPanel";
const COLORS = {
	background: "black",
	text: "white",
};

const GRID = {
	rows: 5,
	columns: 5,
};

export const LightContext = React.createContext();

function App() {
	return (
		<AppStyled>
			<LightConfiguration>
				<Grid rows={GRID.rows} columns={GRID.columns}></Grid>
				<ControlPanel></ControlPanel>
			</LightConfiguration>
		</AppStyled>
	);
}
export default App;

const AppStyled = styled.div`
	position: relative;
	background-color: ${COLORS.background};
	color: ${COLORS.text};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
