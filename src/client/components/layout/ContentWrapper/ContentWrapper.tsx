import { type PropsWithChildren } from 'react';

/**
 * ContentWrapper
 * Provides a centered column layout for page content.
 * @param root0
 * @param root0.children
 */
export function ContentWrapper({ children }: PropsWithChildren) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">{children}</div>
		</div>
	);
}
