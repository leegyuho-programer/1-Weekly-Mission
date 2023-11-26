import styles from './Main.module.css';
import Cards from '../Cards/Cards';
import Search from '../Search/Search';
import FolderInfo from '../FolderInfo/FolderInfo';
import getFolder from '../../api/getFolder';
import { useState, useEffect } from 'react';

function Main() {
  const [folderData, setFolderData] = useState([]);

  const handleLoadFolderData = async () => {
    try {
      setFolderData(await getFolder());
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

export default Main;
