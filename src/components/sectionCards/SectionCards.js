import styles from './SectionCards.module.css';

const SectionCards = ({title, children}) => {
	return (
		<main className={styles['section']}>
			<div className={styles['container']}>
				<h2 className={styles['title-1']}>{title}</h2>
				<ul className={styles['cards']}>{children}</ul>
			</div>
		</main>
	);
};
export default SectionCards;
