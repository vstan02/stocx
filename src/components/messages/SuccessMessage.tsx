import styled from 'styled-components';

import { BaseMessage } from './BaseMessage';

export const SuccessMessage = styled(BaseMessage)`
	color: ${ ({ theme }) => theme.color.SUCCESS_ALPHA };
`;
