import SinglePage from '../components/singlePage/SinglePage';
import {projects} from '../helpers/projectList';
const Project = () => {
	return (
		<>
			<SinglePage objects={projects} />
		</>
	);
};
export default Project;
