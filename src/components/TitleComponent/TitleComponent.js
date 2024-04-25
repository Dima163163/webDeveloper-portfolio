import styles from './TitleComponent.module.css';

const TitleComponent = ({children}) => {
	return <h3 className={styles['card__title']}>{children}</h3>;
};
export default TitleComponent;
