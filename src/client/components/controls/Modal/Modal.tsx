import { useEffect } from 'react';

export interface ModalProps {
	isOpened: boolean;
	title: string;
	message?: React.ReactNode;
	onClose: () => void;
}

/**
 * Displays a modal dialog.
 * @param props Component properties.
 * @returns A React element representing the modal dialog.
 */
export function Modal(props: ModalProps) {
	const { isOpened, title, message, onClose: close } = props;

	useEffect(() => {
		if (!isOpened) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				close();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpened, close]);

	useEffect(() => {
		if (isOpened) {
			document.documentElement.classList.add('is-clipped');
		}

		return () => {
			document.documentElement.classList.remove('is-clipped');
		};
	}, [isOpened]);

	if (!isOpened) {
		return null;
	}

	return (
		<div className={`modal ${isOpened ? 'is-active' : ''}`}>
			<div
				className="modal-background"
				onClick={close}
			></div>
			<div className="modal-card">
				<header className="modal-card-head py-4">
					<p className="modal-card-title">{title}</p>
				</header>
				<section className="modal-card-body">
					<div className="content">{message}</div>
				</section>
				<footer className="modal-card-foot py-2">
					<div className="card-footer-item buttons is-right">
						<button
							className="button is-light is-normal"
							onClick={close}
						>
							Close
						</button>
					</div>
				</footer>
			</div>
			<button
				className="modal-close is-large"
				onClick={close}
			></button>
		</div>
	);
}
