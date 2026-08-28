import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/';
import { Items } from './pages/Items/';
import { Registration } from './pages/Registration/';
import { ProductDetail } from './pages/ProductDetail/';
import { ErrorPage } from './pages/ErrorPage/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
