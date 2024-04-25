import styles from './BtnLink.module.css';

const BtnLink = ({ link, icon, text }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={styles['btn-outline']}
		>
			<img className={styles['btn-outline-img']} src={icon} alt="" />
			{text}
		</a>
	);
};
export default BtnLink;
