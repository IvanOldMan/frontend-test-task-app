import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequestItem } from '../pages/RequestItem/RequestItem.tsx';
import { Header } from '../widgets/Header/Header.tsx';
import { Footer } from '../shared/ui/Footer/Footer.tsx';
import { RequestsList } from '../pages/RequestList/RequestsList.tsx';
import { CreateRequest } from '../pages/CreateRequest/CreateRequest.tsx';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';
import ErrorBoundaryWithLocation from '../shared/ui/ErrorBoundary';
import { PrivateRout } from '../pages/PrivateRout.tsx';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.tsx';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <ErrorBoundaryWithLocation>
        <Routes>
          <Route
            path={ROUTE_PATHS.REQUESTS}
            element={
              <PrivateRout>
                <RequestsList />
              </PrivateRout>
            }
          />
          <Route path={ROUTE_PATHS.REQUESTS} element={<RequestsList />} />
          <Route
            path={ROUTE_PATHS.CREATE_REQUEST}
            element={<CreateRequest />}
          />
          <Route path={ROUTE_PATHS.WELCOME} element={<WelcomePage />} />
          <Route path={ROUTE_PATHS.REQUEST_DETAIL(':id')} element={<RequestItem />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundaryWithLocation>
      <Footer />
    </div>
  );
};

export default App;
