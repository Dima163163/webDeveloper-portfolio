import styles from './Main.module.css';

const Main = () => {
	return (
		<main className={styles['section']}>
			<div className={styles['container']}>
				<ul className={styles['content-list']}>
					<li className={styles['content-list__item']}>
						<h2 className={styles['title-2']}>Frontend</h2>
						<p>HTML, CSS, SCSS, JavaScript, React, Redux, GitHub, Webpack</p>
					</li>
				</ul>
			</div>
		</main>
	);
};
export default Main;
