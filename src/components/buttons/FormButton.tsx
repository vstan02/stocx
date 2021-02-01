import styled from 'styled-components';

import { BaseButton } from './BaseButton';

export const FormButton = styled(BaseButton)`
	color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	background-color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	font-size: 16px;
	font-weight: 600;
	margin-top: 20px;
	box-shadow: 0 2px 2px 0 ${ ({ theme }) => theme.color.BASE_BETA };
	transition: 0.2s box-shadow, 0.3s background;
	border-radius: 1px;
	background-position: center;
	
	&:hover {
		box-shadow: 0 5px 5px 0 ${ ({ theme }) => theme.color.BASE_BETA };
		background: ${ ({ theme }) => theme.color.PRIMARY_ALPHA } 
					radial-gradient(circle, transparent 1%, ${ ({ theme }) => theme.color.PRIMARY_BETA } 1%) 
					center / 15000%;
	}
	
	&:active {
		background-color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
		background-size: 100%;
		transition: background 0s;
	}
`;
