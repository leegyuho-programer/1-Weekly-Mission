import FolderInfo from '../components/FolderInfo/FolderInfo';
import Search from '../components/Search/Search';
import Cards from '../components/Card/Cards';
import styles from './SharedPage.module.css';
import { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import sampleFolder from '../api/getSampleFolder';
import LoadingPage from './LoadingPage';

function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, sampleFolderAsync] = useAsync(sampleFolder);
  const loadLink = async () => {
    const {
      folder,
      folder: { links },
    } = await sampleFolderAsync();

    setCards(() => {
      return [...links];
    });
    setFolderInfo(() => ({ ...folder }));
  };

  useEffect(() => {
    loadLink();
  }, []);

  // const [name, setName] = useState('');
  // const [owner, setOwner] = useState({});
  // const [cards, setCards] = useState([]);
  // const [isLoading, loadingError, sampleFolderAsync] = useAsync(sampleFolder);

  // const loadCards = async () => {
  //   const {
  //     folder: { name, owner, links },
  //   } = await sampleFolderAsync();

  //   setName(name);
  //   setOwner({ ...owner });
  //   setCards((prevCards) => {
  //     return [...prevCards, ...links];
  //   });
  // };

  // useEffect(() => {
  //   loadCards();
  // }, []);

  return (
    // <>
    //   {isLoading ? (
    //     <LoadingPage />
    //   ) : (
    //     <div className={styles.root}>
    //       <FolderInfo name={name} owner={owner} />
    //       <Search />
    //       <Cards cards={cards} />
    //     </div>
    //   )}
    //   {loadingError && <span>{loadingError.message}</span>}
    // </>
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className={styles.root}>
          <FolderInfo folderInfo={folderInfo} />
          <div className={styles.section}>
            <Search />
            <Cards cards={cards} />
          </div>
        </div>
      )}
      {loadingError && <span>{loadingError.message}</span>}
    </>
  );
}

export default SharedPage;
