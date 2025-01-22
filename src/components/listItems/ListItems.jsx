import styles from './ListItems.module.css';

const ListItems = ({ items }) => {
  console.log('items: ', items);
  return (
    <ul className={styles['list-items']}>
        {items.map((item, i) => (
          <li key={i} className={styles['list-item']}>
            {item}
          </li>)
        )}
    </ul>
  );
};
export default ListItems;
