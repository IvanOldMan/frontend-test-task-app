import {} from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRout } from '../pages/PrivateRout.tsx';
import { RequestItem } from '../pages/RequestItem.tsx';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRout>
            <div>root Page</div>
          </PrivateRout>
        }
      />
      <Route path="/requests" element={<div>requests</div>} />
      <Route path="/requests/new" element={<div>new requests</div>} />
      <Route path="/welcomePage" element={<div>welcom Fuck</div>} />
      <Route path="/requests/:id" element={<RequestItem />} />
      <Route path="*" element={<div>Error page</div>} />
    </Routes>
  );
};

export default App;
