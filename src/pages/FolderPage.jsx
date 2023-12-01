import { useEffect, useState } from 'react';
import AddLink from '../components/AddLink/AddLink';
import Cards from '../components/Card/Cards';
import FolderList from '../components/FolderList/FolderList';
import Search from '../components/Search/Search';
import useAsync from '../hooks/useAsync';
import getLink from '../api/getLink';
import getFolder from '../api/getFolder';
import styles from './FolderPage.module.css';
import { useSearchParams } from 'react-router-dom';
import CurrentFolder from '../components/CurrentFolder/CurrentFolder';

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [, , getLinkAsync] = useAsync(getLink);
  const [, , getFolderAsync] = useAsync(getFolder);
  const [searchParams, setSearchParams] = useSearchParams();
  const folderParam = searchParams.get('folderId');

  const handleFolderLoad = async () => {
    const folders = await getFolderAsync({ id: 1 });
    setFolders([...folders]);
  };
  const handleLinkLoad = async () => {
    const links = await getLinkAsync({
      id: 1,
      folderId: folderParam || '',
    });
    setLinks([...links]);
  };
  useEffect(() => {
    handleLinkLoad();
  }, [folderParam]);

  useEffect(() => {
    handleFolderLoad();
  }, []);
  return (
    <>
      <div className={styles.addLink}>
        <AddLink />
      </div>
      <div className={styles.root}>
        <div className={styles.section}>
          <Search />
          <div className={styles.folderSection}>
            <FolderList folders={folders} />
            <CurrentFolder folderId={folderParam} folders={folders} />
            {links.length ? (
              <Cards cards={links} />
            ) : (
              <span className={styles.emptyLink}>저장된 링크가 없습니다.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FolderPage;
