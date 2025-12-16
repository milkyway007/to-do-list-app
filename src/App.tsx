import VerticalMenu from './components/verticalMenu/VerticalMenu';

import './App.css';
import MainContent from './components/mainContent/MainContent';

/**
 * @returns Returns an App icon.
 */
function App() {
	return (
		<>
			<div
				id={'app-layout'}
				className="columns">
				<div className={'column is-2 has-background-white-ter'}>
					<VerticalMenu />
				</div>
				<div className={'column'}>
					<MainContent />
				</div>
			</div>
		</>
	);
}

export default App;
