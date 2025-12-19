import { useState } from 'react';

import { type ButtonProps, type Context } from './model/interfaces';

import { ContextName, contexts } from './constants/constants';

import ContextHolder from './components/contextHolder/ContextHolder';
import VerticalMenu from './components/verticalMenu/VerticalMenu';

import './App.css';

/**
 * @returns Returns an App icon.
 */
function App() {
	const [selectedContext, setContextSelected] = useState<Context | undefined>(
		contexts.find((x) => x.name === ContextName.Today),
	);

	/**
	 * OnClick event for a button.
	 * @param button selected app context.
	 */
	function buttonOnClick(button: ButtonProps): void {
		const context = contexts.find((x) => x.name === button.name);
		setContextSelected(context);
	}

	return (
		<>
			<div
				id="app"
				className="columns">
				<div className={'column is-2 has-background-white-ter'}>
					<VerticalMenu buttonOnClick={buttonOnClick} />
				</div>
				<div className={'column'}>
					<ContextHolder context={selectedContext} />
				</div>
			</div>
		</>
	);
}

export default App;
