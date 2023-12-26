import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { getCars } from 'redux/operations';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('components/Catalog/Catalog'));
const CarDetails = lazy(() => import('components/CarDetails/CarDetails'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const dispatch = useDispatch();

  
  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:carId" element={<CarDetails />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
