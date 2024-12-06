import styled from 'styled-components';

const StyledTestimonial = styled.div`
	display: flex;
	flex-direction: column;
	background-image: url(${({ $bgimage }) => $bgimage});
	background-repeat: no-repeat;
	background-position: top right 24px;
	gap: 16px;
	border-radius: 8px;
	background-color: ${({ $background }) => $background};
	padding: 25px 32px;

	@media screen and (width>=768px) {
		grid-column: ${({ $column }) => $column};
		grid-row: ${({ $row }) => $row};
		background-position: top right 80px;
	}
`;
export { StyledTestimonial };

const StyledPicAndName = styled.div`
	display: flex;
	gap: 17px;
	height: 29px;
	font-weight: 500;
`;
export { StyledPicAndName };

const StyledImage = styled.img`
	height: 29px;
	width: 29px;
	border-radius: 50%;
	border: ${({ $circle }) => $circle};
`;
export { StyledImage };

const StyledNameAndRole = styled.div`
	display: flex;
	flex-direction: column;
`;
export { StyledNameAndRole };

const StyledName = styled.span`
	font-size: 13px;
	color: ${({ $nameColor }) => $nameColor};
`;
export { StyledName };

const StyledVerify = styled.span`
	color: ${({ $verified }) => $verified};
	font-size: 11px;
	opacity: 50%;
`;
export { StyledVerify };

const StyledHeader = styled.span`
	font-size: 20px;
	font-weight: 600;
	color: ${({ $headerColor }) => $headerColor};
`;
export { StyledHeader };

const StyledSpeech = styled.span`
	font-size: 13px;
	opacity: 70%;
	color: ${({ $speechColor }) => $speechColor};
`;
export { StyledSpeech };
