import BtnGoToBack from '../components/btnGoToBack/BtnGoToBack';
import SinglePage from '../components/singlePage/SinglePage';
import { projects } from '../helpers/projectList';
const Project = () => {
	return (
		<>
			<BtnGoToBack />
			<SinglePage objects={projects} />
		</>
	);
};
export default Project;
