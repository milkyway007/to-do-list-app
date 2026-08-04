import { Observer } from 'mobx-react-lite';

import { useStore } from '../../../lib/hooks/useStore.ts';

import { Loader } from '../../components/Loader/Loader.tsx';

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
	const { children } = props;
	const { uiStore } = useStore();

	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				<Observer>
					{() =>
						uiStore.isLoading ? <Loader className={['mt-6']} /> : children
					}
				</Observer>
			</div>
		</div>
	);
}
