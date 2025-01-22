import CardItem from '../components/cardItem/CardItem';
import SectionCards from '../components/sectionCards/SectionCards';
import { projects } from '../helpers/projectList';

const Projects = () => {
	return (
		<>
			<SectionCards title="Projects">
				{projects.map((project) => (
					<CardItem
						key={project.id}
						img={project.img}
						imgAvif={project.imgAvif}
						imgWebp={project.imgWebp}
						title={project.title}
						link={`/project/${project.id}`}
					/>
				))}
			</SectionCards>
		</>
	);
};
export default Projects;
