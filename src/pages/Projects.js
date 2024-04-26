import BtnGoToBack from '../components/btnGoToBack/BtnGoToBack';
import CardItem from '../components/cardItem/CardItem';
import SectionCards from '../components/sectionCards/SectionCards';
import { projects } from '../helpers/projectList';

const Projects = () => {
	return (
		<>
			<BtnGoToBack />
			<SectionCards title="Projects">
				{projects.map((project) => (
					<CardItem
						key={project.id}
						img={project.img}
						title={project.title}
						link={`/project/${project.id}`}
					/>
				))}
			</SectionCards>
		</>
	);
};
export default Projects;
