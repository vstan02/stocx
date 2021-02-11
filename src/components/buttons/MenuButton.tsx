import styled from 'styled-components';

import { BaseButton } from './BaseButton';

export const MenuButton = styled(BaseButton)`
	color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	background-color: ${ ({ theme }) => theme.color.BASE_ALPHA };
	transition: .5s box-shadow;

	@media (max-width: ${ ({ theme }) => theme.bkps.BETA }) {
		width: 100px;
		font-size: 14px;
	}

	@media (max-width: ${ ({ theme }) => theme.bkps.DELTA }) {
		height: 30px;
	}
`;
