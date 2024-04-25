import vk from './img/icons/vk.svg';
import instagram from './img/icons/instagram.svg';
import twitter from './img/icons/twitter.svg';
import gitHub from './img/icons/gitHub.svg';
import linkedIn from './img/icons/linkedIn.svg';
import styles from './Footer.module.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className={styles['footer']}>
			<div className={styles['container']}>
				<div className={styles['footer__wrapper']}>
					<ul className={styles['social']}>
						<li className={styles['social__item']}>
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className={styles['social__item']}>
							<a href="#!">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className={styles['social__item']}>
							<a href="#!">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className={styles['social__item']}>
							<a href="#!">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className={styles['social__item']}>
							<a href="#!">
								<img src={linkedIn} alt="Link" />
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
