import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

interface BasePageProps {
	title: string;
	className?: string;
}

const PageRoot = styled.main`
	width: 100%;
	height: 100%;
`;

export const BasePage: React.FC<BasePageProps> = props => (
	<>
		<Head>
			<title>
				{ props.title }
			</title>
		</Head>
		<PageRoot>
			{ props.children }
		</PageRoot>
	</>
);
