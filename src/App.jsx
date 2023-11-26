import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import styles from './styles/App.module.css';
import Layout from './components/Layout/Layout';
import Folder from './pages/Folder';
import Shared from './pages/Shared';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/shared' element={<Shared />} />
            <Route path='/folder' element={<Folder />}>
              <Route index element={<Folder />} />
              <Route path=':folderId' element={<Folder />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
