import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>root Page</div>} />
        <Route path="/requests" element={<div>requests</div>} />
        <Route path="/requests/new" element={<div>new requests</div>} />
        <Route path="*" element={<div>Error page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
