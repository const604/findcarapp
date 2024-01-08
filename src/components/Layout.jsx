import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Home, Header } from '../pages/Catalog/Catalog.styled';

export const Layout = () => {
  return (
    <Home>
      <Header>
        <li>
          <StyledLink to="/">Home page</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Home>
  );
};
