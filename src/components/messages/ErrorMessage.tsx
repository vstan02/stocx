import styled from 'styled-components';

import { BaseMessage } from './BaseMessage';

export const ErrorMessage = styled(BaseMessage)`
	color: ${ ({ theme }) => theme.color.DANGER_ALPHA };
`;
