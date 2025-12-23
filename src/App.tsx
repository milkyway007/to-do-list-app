import { useState } from 'react';

import { type Context, type VerticalMenuButtonProps } from './model/interfaces';

import { ContextName, contexts } from './constants/constants';

import ContextHolder from './components/contextHolder/ContextHolder';
import VerticalMenu from './components/verticalMenu/VerticalMenu';

import './App.css';

/**
 * @returns Returns an App icon.
 */
function App() {
	const [selectedContext, setSelectedContext] = useState<Context | undefined>(
		contexts.find((x) => x.name === ContextName.Today),
	);

	/**
	 * Clicked event for a vertical menu button.
	 * @param button selected app context.
	 */
	function verticalMenuButtonClicked(button: VerticalMenuButtonProps): void {
		const context = contexts.find((x) => x.name === button.name);
		setSelectedContext(context);
	}

	return (
		<>
			<div
				id="app"
				className="columns">
				<div className="column is-2 has-background-white-ter">
					<VerticalMenu buttonClicked={verticalMenuButtonClicked} />
				</div>
				<div className="column">
					<ContextHolder context={selectedContext} />
				</div>
			</div>
		</>
	);
}

export default App;
