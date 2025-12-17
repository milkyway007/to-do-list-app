import { useState } from 'react';

import { type ButtonNameType } from './model/types';

import { ButtonName } from './constants/constants';

import MainContent from './components/mainContent/MainContent';
import VerticalMenu from './components/verticalMenu/VerticalMenu';

import './App.css';

/**
 * @returns Returns an App icon.
 */
function App() {
	const [selectedContent, setSelectedContent] = useState<ButtonNameType>(
		ButtonName.Today,
	);

	/**
	 * OnClick event for a button.
	 * @param selectedButton button name.
	 */
	function buttonOnClick(selectedButton: ButtonNameType): void {
		setSelectedContent(selectedButton);
	}

	return (
		<>
			<div
				id={'app-layout'}
				className="columns">
				<div className={'column is-2 has-background-white-ter'}>
					<VerticalMenu buttonOnClick={buttonOnClick} />
				</div>
				<div className={'column'}>
					<MainContent
						mainContent={selectedContent}
						buttonOnClick={buttonOnClick}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
