import styled from 'styled-components';

import { BaseButton } from './BaseButton';

export const TextButton = styled(BaseButton)`
	color: ${ ({ theme }) => theme.color.PRIMARY_ALPHA };
	background-color: transparent;
`;
