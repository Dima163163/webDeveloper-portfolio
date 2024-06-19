import BtnLink from '../btnLink/BtnLink';
import codeWarsIcon from '../../img/icons/codewars-svg.svg'
import styles from './Main.module.css';

const Main = () => {
	return (
		<main className={styles['section']}>
			<div className={styles['container']}>
				<ul className={styles['content-list']}>
					<li className={styles['content-list__item']}>
						<h2 className={styles['title-2']}>Frontend</h2>
						<p>
							HTML, CSS, SCSS, JavaScript, React, Redux Toolkit, GitHub, Vite,
							Webpack
						</p>
					</li>
				</ul>
				<div className={styles['btn-container']}>
					<BtnLink link="https://www.codewars.com/users/Dima163163" icon={codeWarsIcon} text="Codewars account"/>
				</div>
			</div>
		</main>
	);
};
export default Main;
