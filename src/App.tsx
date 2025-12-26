import { type ReactNode, useState } from 'react';

import { validate } from './services/context/contextWithTaskListValidator';

import { type VerticalMenuButtonProps } from './model/ui/VerticalMenuButton';
import { type ContextViewModel } from './model/viewModel/ContextViewModel';
import { type DayWithTaskViewModel } from './model/viewModel/DayWithTaskViewModel';
import { type TaskListViewModel } from './model/viewModel/TaskListViewModel';

import { type ContextName, contexts } from './constants/context';
import { CONTEXT_CONFIG } from './constants/contextConfig';
import { verticalMenuButtons } from './constants/verticalMenu';

import { IconButton } from './components/controls/IconButton/IconButton';
import { ContentWrapper } from './components/layout/ContentWrapper/ContentWrapper';
import { DayTaskList } from './components/layout/DayTaskListContainer/DayTaskListContainer';
import { VerticalMenu } from './components/layout/verticalMenu/VerticalMenu';

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
		taskList: TaskListViewModel,
	): ReactNode {
		return (
			<div className="content block task-list-container">
				<div className="task-list-header">
					<h2 className="header mb-5">{CONTEXT_CONFIG[name].label}</h2>
				</div>
				<div className="task-list-body">
					{taskList.days.length > 0 && (
						<ul>
							{taskList.days.map((day: DayWithTaskViewModel) => {
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

	const selectedContext: ContextViewModel | undefined = contexts.find(
		(x) => x.name === selectedContextName,
	);

	let currentContext = undefined;
	if (selectedContext && validate(selectedContext)) {
		currentContext = getCurrentContextLayout(
			selectedContextName,
			selectedContext.taskList,
		);
	}

	return (
		<div
			id="app"
			className="columns"
		>
			<div className="column is-2 has-background-white-bis">
				<VerticalMenu>
					<ol className="menu-list">
						{verticalMenuButtons.map((item: VerticalMenuButtonProps) => {
							return (
								<li
									key={item.contextName}
									onClick={() => {
										onVerticalMenuButtonClicked(item.contextName);
									}}
								>
									<IconButton
										{...item}
										isActive={item.contextName === selectedContextName}
									/>
								</li>
							);
						})}
					</ol>
				</VerticalMenu>
			</div>
			<div className="column">
				<ContentWrapper>{currentContext}</ContentWrapper>
			</div>
		</div>
	);
}
