import { NavLink } from 'react-router-dom';
import styles from './CardItem.module.css';
import ImageComponent from '../imageComponent/ImageComponent';
import TitleComponent from '../TitleComponent/TitleComponent';

const CardItem = ({ img, imgAvif, imgWebp, title, link }) => {
	return (
		<li className={styles['card']}>
			<NavLink className={styles['card-wrapper']} to={link}>
				<ImageComponent
					img={img}
					imgAvif={imgAvif}
					imgWebp={imgWebp}
					title={title}
					className={styles['card__img']}
				/>
				<TitleComponent>{title}</TitleComponent>
			</NavLink>
		</li>
	);
};
export default CardItem;
