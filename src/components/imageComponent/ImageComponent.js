const ImageComponent = ({
	img,
	imgAvif,
	imgWebp,
	title,
	className,
	width = '370',
	height = '270'
}) => {
	return (
		<picture>
			<source srcSet={imgAvif} type="image/avif" />
			<source srcSet={imgWebp} type="image/webp" />
			<img
				src={img}
				alt={title}
				className={className}
				width={width}
				height={height}
			/>
		</picture>
	);
};
export default ImageComponent;
