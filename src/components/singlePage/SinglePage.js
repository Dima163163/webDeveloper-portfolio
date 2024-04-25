import styles from './SinglePage.module.css';
import BtnLink from '../btnLink/BtnLink';
import { useParams } from 'react-router-dom';
import gitHubIcon from '../../img/icons/gitHub-black.svg';
import vercelIcon from '../../img/icons/logo-vercel.svg';

const SinglePage = ({ objects }) => {
	const { id } = useParams();
	const object = objects[id];
	return (
		<>
			<main className={styles['section']}>
				<div className={styles['container']}>
					<div className={styles['page-details']}>
						<h1 className={styles['title-1']}>{object.title}</h1>

						<img
							src={object.imgBig || object.img}
							alt=""
							className={styles['page-details__cover']}
						/>
						{object.skills && (
							<div className={styles['page-details__desc']}>
								<p>{object.skills}</p>
							</div>
						)}
						{object.gitHubLink && (
							<BtnLink
								link={object.gitHubLink}
								icon={gitHubIcon}
								text="GitHub repo"
							/>
						)}
						{object.gitHubPages && (
							<BtnLink
								link={object.gitHubPages}
								icon={gitHubIcon}
								text="GitHub pages"
							/>
						)}
						{object.vercel && (
							<BtnLink
								link={object.vercel}
								icon={vercelIcon}
								text="Vercel repo"
							/>
						)}
					</div>
				</div>
			</main>
		</>
	);
};
export default SinglePage;
