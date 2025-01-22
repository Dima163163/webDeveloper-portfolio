import vk from './img/icons/vk.svg';
import gitHub from './img/icons/gitHub.svg';
import styles from './Footer.module.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className={styles['footer']}>
			<div className={styles['container']}>
				<div className={styles['footer__wrapper']}>
					<ul className={styles['social']}>
						<li className={styles['social__item']}>
							<a href="https://vk.ru" target="_blank" rel="noreferrer">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className={styles['social__item']}>
							<a
								href="https://github.com/Dima163163"
								target="_blank"
								rel="noreferrer"
							>
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className={styles['copyright']}>
						<p>© {year} frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
