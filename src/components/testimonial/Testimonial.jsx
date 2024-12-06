import {
	StyledHeader,
	StyledImage,
	StyledName,
	StyledNameAndRole,
	StyledPicAndName,
	StyledSpeech,
	StyledTestimonial,
	StyledVerify
} from './testimonial.styles';

const Testimonial = ({
	url,
	name,
	header,
	speech,
	$background,
	$circle,
	$nameColor,
	$verified,
	$bgimage,
	$headerColor,
	$speechColor,
	$column,
	$row
}) => {
	return (
		<StyledTestimonial
			$background={$background}
			$bgimage={$bgimage}
			$column={$column}
			$row={$row}
		>
			<StyledPicAndName>
				<StyledImage $circle={$circle} src={url} alt='profile-pic' />
				<StyledNameAndRole>
					<StyledName $nameColor={$nameColor}>{name}</StyledName>
					<StyledVerify $verified={$verified}>Verified Graduate</StyledVerify>
				</StyledNameAndRole>
			</StyledPicAndName>
			<StyledHeader $headerColor={$headerColor}>{header}</StyledHeader>
			<StyledSpeech $speechColor={$speechColor}>{speech}</StyledSpeech>
		</StyledTestimonial>
	);
};

export default Testimonial;
