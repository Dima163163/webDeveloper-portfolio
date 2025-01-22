import { useNavigate } from 'react-router-dom';
import styles from './BtnGoToBack.module.css';

const BtnGoToBack = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<>
			<div className={styles['container']}>
				<button onClick={goBack} className={styles['btnGoToBack']}>
					Go to back
				</button>
			</div>
		</>
	);
};
export default BtnGoToBack;
