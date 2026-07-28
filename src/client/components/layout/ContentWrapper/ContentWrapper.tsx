import { type PropsWithChildren } from 'react';

/**
 * ContentWrapper
 * Provides a centered column layout for page content.
 */
export function ContentWrapper({ children }: PropsWithChildren) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">{children}</div>
		</div>
	);
}
