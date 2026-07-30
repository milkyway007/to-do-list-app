import { Loader } from '../../controls/Loader/Loader.tsx';

interface ContentWrapperProps {
	children?: React.ReactNode;
	isLoading: boolean;
}

/**
 * Renders a wrapper that centers its child content within the page layout.
 * @param props Component properties.
 * @returns The rendered content wrapper component.
 */
export function ContentWrapper(props: ContentWrapperProps) {
	const { children, isLoading } = props;

	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				{isLoading ? <Loader className={['mt-6']} /> : children}
			</div>
		</div>
	);
}
