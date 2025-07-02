import { Route, Routes } from 'react-router-dom';
import { RequestItem } from '../pages/RequestItem.tsx';
import { Header } from '../widgets/Header/Header.tsx';
import { Footer } from '../shared/ui/Footer/Footer.tsx';
import { RequestsList } from '../pages/RequestsList.tsx';
import { CreateRequest } from '../pages/CreateRequest.tsx';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';
import ErrorBoundaryWithLocation from '../shared/ui/ErrorBoundary';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingBottom: 64,
      }}
    >
      <Header />
      <ErrorBoundaryWithLocation>
        <Routes>
          <Route path={ROUTE_PATHS.REQUESTS} element={<RequestsList />} />
          <Route
            path={ROUTE_PATHS.CREATE_REQUEST}
            element={<CreateRequest />}
          />
          <Route path="/welcomePage" element={<div>welcom Fuck</div>} />
          <Route path="/requests/:id" element={<RequestItem />} />
          <Route path="*" element={<div>Error page</div>} />
        </Routes>
      </ErrorBoundaryWithLocation>
      <Footer />
    </div>
  );
};

export default App;
