import SinglePage from '../components/singlePage/SinglePage';
import {certificates} from '../helpers/certificatesList';
const Certificate = () => {
	return (
		<>
			<SinglePage objects={certificates} />
		</>
	);
};
export default Certificate;
