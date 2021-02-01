import styled from 'styled-components';

export const BaseInput = styled.input`
	width: 400px;
	height: 30px;
	border: none;
	outline: none;
	color: ${ ({ theme }) => theme.color.CONTRAST_ALPHA };
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	border-bottom: 1px solid ${ ({ theme }) => theme.color.BASE_BETA };
`;
