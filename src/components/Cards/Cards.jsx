import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './Cards.module.css';

const Cards = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <div className={styles.root}>
        <ul className={styles.CardList}>
          {links.map((data) => (
            <li key={data.id}>
              <CardItem item={data} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Cards;
