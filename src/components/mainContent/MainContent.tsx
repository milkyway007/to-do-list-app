import TodayTaskList from '../todayTaskList/TodayTaskList';

/**
 * @returns Returns a MainContent component.
 */
function MainContent() {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				<TodayTaskList />
			</div>
		</div>
	);
}

export default MainContent;
