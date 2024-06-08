import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import App from './pages/App/index.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      <ScrollToTop />
      <Footer />
    </Router>
  </React.StrictMode>
)
