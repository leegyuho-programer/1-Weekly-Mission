import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import styles from './styles/App.module.css';
import Layout from './components/Layout/Layout';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/shared' element={<SharedPage />} />
            <Route path='/folder' element={<FolderPage />}>
              <Route index element={<FolderPage />} />
              <Route path=':folderId' element={<FolderPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
