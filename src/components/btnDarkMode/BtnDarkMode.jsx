import sun from './img/icons/sun.svg';
import moon from './img/icons/moon.svg';
import styles from './BtnDarkMode.module.css';
import {useEffect} from 'react';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';
import cn from 'class-names';

const BtnDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';

				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode((currentValue) =>
			currentValue === 'light' ? 'dark' : 'light'
		);
	};

	const btnNormal = styles['dark-mode-btn'];
	const btnActive = cn(
		styles['dark-mode-btn'],
		styles['dark-mode-btn--active']
	);

	return (
		<button
			className={darkMode === 'dark' ? btnActive : btnNormal}
			onClick={toggleDarkMode}
		>
			<img
				src={sun}
				alt="Light mode"
				className={styles['dark-mode-btn__icon']}
			/>
			<img
				src={moon}
				alt="Dark mode"
				className={styles['dark-mode-btn__icon']}
			/>
		</button>
	);
};
export default BtnDarkMode;
