import { type ReactNode, useState } from 'react';

import { type Context } from './model/Context';
import { type Day } from './model/Day';
import { type TaskList } from './model/TaskList';
import { type VerticalMenuButtonProps } from './model/VerticalMenuButton';

import { type ContextName, contexts } from './constants/context';
import { CONTEXT_CONFIG } from './constants/contextConfig';
import { verticalMenuButtons } from './constants/verticalMenu';

import { IconButton } from './components/controls/IconButton/IconButton';
import { ContentWrapper } from './components/layout/ContentWrapper/ContentWrapper';
import { DayTaskList } from './components/layout/DayTaskListContainer/DayTaskListContainer';
import { VerticalMenu } from './components/layout/VerticalMenu/VerticalMenu';

import './App.css';

/**
 * App
 * Main application component.
 * Handles the vertical menu selection and renders the corresponding task list content.
 */
export function App() {
	const [selectedContextName, setSelectedContextName] =
		useState<ContextName>('Today');

	/**
	 * Handles clicks on vertical menu buttons.
	 * Updates the currently selected context.
	 */
	function onVerticalMenuButtonClicked(contextName: ContextName): void {
		setSelectedContextName(contextName);
	}

	/**
	 * Renders the layout for a given context.
	 * If the context has no task list, returns null.
	 */
	function getCurrentContextLayout(
		name: ContextName,
		taskList: TaskList | undefined,
	): ReactNode {
		if (!taskList) {
			return null;
		}

		return (
			<div className="content block task-list-container">
				<div className="task-list-header">
					<h2 className="header mb-5">{CONTEXT_CONFIG[name].label}</h2>
				</div>
				<div className="task-list-body">
					{taskList.days.length > 0 && (
						<ul>
							{taskList.days.map((day: Day) => {
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

	const selectedContext: Context | undefined = contexts.find(
		(x) => x.name === selectedContextName,
	);

	const currentContext = getCurrentContextLayout(
		selectedContextName,
		selectedContext?.taskList,
	);

	return (
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
				<ContentWrapper>{currentContext}</ContentWrapper>
			</div>
		</div>
	);
}
