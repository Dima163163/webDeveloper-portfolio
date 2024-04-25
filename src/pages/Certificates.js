import CardItem from '../components/cardItem/CardItem';
import SectionCards from '../components/sectionCards/SectionCards';
import {certificates} from '../helpers/certificatesList';

const Certificates = () => {
	return (
		<>
			<SectionCards title="Certificates">
				{certificates.map((certificate) => (
					<CardItem
						key={certificate.id}
						img={certificate.img}
						title={certificate.title}
						link={`/certificate/${certificate.id}`}
					/>
				))}
			</SectionCards>
		</>
	);
};
export default Certificates;
