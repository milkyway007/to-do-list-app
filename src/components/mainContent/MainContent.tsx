import { type ButtonNameType } from '../../model/types';

import { ButtonName } from '../../constants/constants';

import TaskList from '../taskList/taskList';

interface MainContentProps {
	mainContent: string;
	buttonOnClick: (buttonName: ButtonNameType) => void;
}

/**
 * @param root0 main content props
 * @param root0.mainContent content shown to the user
 * @param root0.buttonOnClick button on click function
 * @returns Returns a MainContent component.
 */
function MainContent({ mainContent, buttonOnClick }: MainContentProps) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				{mainContent === ButtonName.Today && (
					<TaskList buttonOnClick={buttonOnClick} />
				)}
			</div>
		</div>
	);
}

export default MainContent;
