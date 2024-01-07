import styled from "styled-components";
import Grid from "../Grid/Grid";

import Light from "../Light/Light";

const COLORS = {
	background: "black",
	text: "white",
};

const GRID = {
	rows: 5,
	columns: 5,
};

function App() {
	return (
		<AppStyled>
			<Grid rows={GRID.rows} columns={GRID.columns}></Grid>
		</AppStyled>
	);
}
export default App;

const AppStyled = styled.div`
	background-color: ${COLORS.background};
	color: ${COLORS.text};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
