import React from 'react';
import {
  Navbar,
  Welcome,
  Transactions,
  Services,
  Footer,
} from './features/common/index';
import './App.css';

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
