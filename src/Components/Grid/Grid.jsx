import React from "react";
import styled from "styled-components";
import Light from "../Light/Light";
function Grid({ rows, columns }) {
	return (
		<StyledGrid style={{ "--columns": columns, "--rows": rows }}>
			{Array(rows * columns)
				.fill()
				.map((_, index) => (
					<Light key={index} />
				))}
		</StyledGrid>
	);
}

export default Grid;

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	grid-template-rows: repeat(var(--rows), 1fr);
	gap: 10px;
`;
