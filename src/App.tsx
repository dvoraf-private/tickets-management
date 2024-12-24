
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tickets from "./components/tickets";

const App: React.FC = () => {

  return (
      <Router>
          <Routes>
            <Route path="/" Component={Tickets} />
          </Routes>
      </Router>
  );
};

export default App;
