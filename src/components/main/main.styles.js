import styled from 'styled-components';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 71px 24px;
	max-width: 100%;

	@media screen and (width>=768px) {
		padding: 165px;
		display: grid;
		grid-template-columns: repeat(4, 255px);
		grid-template-rows: repeat(2, 282px);
		row-gap: 24px;
		column-gap: 30px;
	}
`;

export { StyledMain };
