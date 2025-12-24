import { type ReactNode } from 'react';

interface ContentWrapperProps {
	children: ReactNode;
}

/**
 * ContentWrapper
 * Provides a centered column layout for page content.
 */
export function ContentWrapper({ children }: ContentWrapperProps) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">{children}</div>
		</div>
	);
}
