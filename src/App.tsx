import { type ReactNode, useState } from 'react';

import { type Day, type VerticalMenuButtonProps } from './model/interfaces';
import { type ContextNameType } from './model/types';

import {
	ContextName,
	contexts,
	verticalMenuButtons,
} from './constants/constants';

import { ContentWrapper } from './components/contentWrapper/ContentWrapper';
import { DayTaskList } from './components/dayTaskList/DayTaskList';
import { IconButton } from './components/general/IconButton';
import VerticalMenu from './components/verticalMenu/VerticalMenu';

import './App.css';

/**
 * @returns Returns an App icon.
 */
function App() {
	const [selectedContextName, setSelectedContextName] =
		useState<ContextNameType>(ContextName.Today);

	/**
	 * Clicked event for a vertical menu button.
	 * @param contextName The name of the selected context.
	 */
	function onVerticalMenuButtonClicked(contextName: ContextNameType): void {
		setSelectedContextName(contextName);
	}

	/**
	 * Returns the layot for a context;
	 * @returns the layot for a context;
	 * @param name The name of the context;
	 * @param days The days of the context;
	 */
	function getContextLayout(
		name: ContextNameType,
		days: Day[] | undefined,
	): ReactNode {
		if (name !== ContextName.Today) {
			return undefined;
		}

		return (
			<div className="content block task-list-container">
				<div className="task-list-header">
					<h2 className="header mb-5">{name}</h2>
				</div>
				<div className="task-list-body">
					{days?.length && (
						<ul>
							{days.map((day: Day) => {
								return (
									<li key={day.id}>
										<DayTaskList day={day} />
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		);
	}

	let initialContext = undefined;

	if (selectedContextName === ContextName.Today) {
		const selectedContext = contexts.find(
			(x) => x.name === selectedContextName,
		);

		initialContext = getContextLayout(
			selectedContextName,
			selectedContext?.taskList?.days,
		);
	}

	return (
		<>
			<div
				id="app"
				className="columns"
			>
				<div className="column is-2 has-background-white-ter">
					<VerticalMenu>
						<ul className="menu-list">
							{verticalMenuButtons.map((item: VerticalMenuButtonProps) => {
								return (
									<li
										key={item.id}
										onClick={() => {
											onVerticalMenuButtonClicked(item.contextName);
										}}
									>
										<IconButton {...item} />
									</li>
								);
							})}
						</ul>
					</VerticalMenu>
				</div>
				<div className="column">
					<ContentWrapper>{initialContext}</ContentWrapper>
				</div>
			</div>
		</>
	);
}

export default App;
