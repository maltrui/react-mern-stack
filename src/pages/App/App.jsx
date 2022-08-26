import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      { user ?
        <Routes>
          {/* Route components in here */}
          <Route path='/orders/new' element={<NewOrderPage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
        :
        <AuthPage />
      }
    </main>
  );
}
