import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Mount Sanity Studio at /studio, main site everywhere else
if (window.location.pathname.startsWith('/studio')) {
  Promise.all([
    import('sanity'),
    import('../sanity.config.js'),
  ]).then(([{ Studio }, { default: config }]) => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <Studio config={config} />
      </StrictMode>
    );
  });
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
