export interface LoaderProps {
	className?: string[];
}

/**
 * Displays a Bulma loading spinner.
 * @param props Component properties.
 * @returns A React element that renders a Bulma loading spinner.
 */
export function Loader(props: LoaderProps) {
	const { className } = props;

	return <span className={`loader ${className?.join(' ') ?? ''}`}></span>;
}
