import styles from './ImageComponent.module.css';

const ImageComponent = ({ img, imgAvif, imgWebp, title, className }) => {
	return (
		<picture className={styles.picture}>
			<source srcSet={imgAvif} type="image/avif" />
			<source srcSet={imgWebp} type="image/webp" />
			<img src={img} alt={title} className={className} />
		</picture>
	);
};
export default ImageComponent;
