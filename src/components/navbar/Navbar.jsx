import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import cn from 'class-names';

const Navbar = () => {
	const activeLink = cn(
		styles['nav-list__link'],
		styles['nav-list__link--active']
	);
	const normalLink = styles['nav-list__link'];
	return (
		<nav className={styles.nav}>
			<div className={styles['container']}>
				<div className={styles['nav-row']}>
					<a href="/" className={styles.logo}>
						<strong>WebDeveloper</strong> Portfolio
					</a>
					<BtnDarkMode />

					<ul className={styles['nav-list']}>
						<li className={styles['nav-list__item']}>
							<NavLink
								to="./"
								className={({isActive}) => (isActive ? activeLink : normalLink)}
							>
								Home
							</NavLink>
						</li>
						<li className={styles['nav-list__item']}>
							<NavLink
								to="./projects"
								className={({isActive}) => (isActive ? activeLink : normalLink)}
							>
								Projects
							</NavLink>
						</li>
						<li className={styles['nav-list__item']}>
							<NavLink
								to="./certificates"
								className={({isActive}) => (isActive ? activeLink : normalLink)}
							>
								Certificates
							</NavLink>
						</li>
						<li className={styles['nav-list__item']}>
							<NavLink
								to="./resume"
								className={({isActive}) => (isActive ? activeLink : normalLink)}
							>
								Resume
							</NavLink>
						</li>
						<li className={styles['nav-list__item']}>
							<NavLink
								to="./contacts"
								className={({isActive}) => (isActive ? activeLink : normalLink)}
							>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
