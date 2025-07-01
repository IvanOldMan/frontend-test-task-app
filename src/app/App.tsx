import {} from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRout } from '../pages/PrivateRout.tsx';
import { RequestItem } from '../pages/RequestItem.tsx';
import { Header } from '../widgets/Header/Header.tsx';
import { Footer } from '../shared/ui/Footer/Footer.tsx';
import { RequestsList } from '../pages/RequestsList.tsx';
import { CreateRequest } from '../pages/CreateRequest.tsx';
import { ROUTE_PATHS } from '../shared/config/routeConfig/routePaths.ts';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Header />
      <Routes>
        <Route path={ROUTE_PATHS.REQUESTS} element={<RequestsList />} />
        {/*<Route path="/requests" element={<div>requests</div>} />*/}
        <Route path={ROUTE_PATHS.CREATE_REQUEST} element={<CreateRequest />} />
        <Route path="/welcomePage" element={<div>welcom Fuck</div>} />
        <Route path={ROUTE_PATHS.REQUEST_DETAIL()} element={<RequestItem />} />
        <Route path="*" element={<div>Error page</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
