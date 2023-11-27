import FolderInfo from '../components/FolderInfo/FolderInfo';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import styles from './SharedPage.module.css';
import { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import sampleFolder from '../api/sampleFolder';
import LoadingPage from './LoadingPage';

function SharedPage() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, sampleFolderAsync] = useAsync(sampleFolder);

  // useEffect(() => {
  //   const loadCards = async () => {
  //     const {
  //       folder: { name, owner, links },
  //     } = await sampleFolderAsync();

  //     setName(name);
  //     setOwner({ ...owner });
  //     setCards((prevCards) => {
  //       return [...prevCards, ...links];
  //     });
  //   };
  //   loadCards();
  // }, []);
  useEffect(() => {
    const loadCards = async () => {
      const result = await sampleFolderAsync();
      if (result) {
        const {
          folder: { name, owner, links },
        } = result;

        setName(name);
        setOwner({ ...owner });
        setCards((prevCards) => {
          return [...prevCards, ...links];
        });
      }
    };
    loadCards();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className={styles.root}>
          <FolderInfo name={name} owner={owner} />
          <Search />
          <Cards cards={cards} />
        </div>
      )}
      {loadingError && <span>{loadingError.message}</span>}
    </>
  );
}

export default SharedPage;
