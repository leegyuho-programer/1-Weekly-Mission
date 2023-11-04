import styles from '../styles/Main.module.css';
import Cards from '../components/Cards.js';
import Search from '../components/Search.js';
import FolderInfo from '../components/FolderInfo.js';
import { getFolders } from '../api/getFolders.js';
import { useState, useEffect } from 'react';

function Shared() {
  const [folderData, setFolderData] = useState([]);

  const handleLoadFolderData = async () => {
    try {
      setFolderData(await getFolders());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadFolderData();
  }, []);

  return (
    <div className={styles.root}>
      <FolderInfo folderData={folderData} />
      <Search />
      <Cards folderData={folderData} />
    </div>
  );
}

export default Shared;
