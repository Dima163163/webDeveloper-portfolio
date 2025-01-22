import styles from './ContactsSection.module.css';

const ContactsSection = () => {
	return (
		<main className={styles['section']}>
			<div className={styles['container']}>
				<h1 className={styles['title-1']}>Contacts</h1>

				<ul className={styles['content-list']}>
					<li className={styles['content-list__item']}>
						<h2 className={styles['title-2']}>Location</h2>
						<p>Samara, Russia</p>
					</li>
					<li className={styles['content-list__item']}>
						<h2 className={styles['title-2']}>Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79051234567">+7 (917) 011-45-99</a>
						</p>
					</li>
					<li className={styles['content-list__item']}>
						<h2 className={styles['title-2']}>Email</h2>
						<p>
							<a href="mailto:khlopovdima@gmail.com.com">
								khlopovdima@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
};
export default ContactsSection;
