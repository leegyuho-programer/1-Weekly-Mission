import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import styles from './styles/App.module.css';
import Layout from './Layout/Layout';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='shared' element={<SharedPage />} />
            <Route path='folder' element={<FolderPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
