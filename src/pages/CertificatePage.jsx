import BtnGoToBack from '../components/btnGoToBack/BtnGoToBack';
import SinglePage from '../components/singlePage/SinglePage';
import { certificates } from '../helpers/certificatesList';
const Certificate = () => {
	return (
		<>
			<BtnGoToBack />
			<SinglePage objects={certificates} />
		</>
	);
};
export default Certificate;
