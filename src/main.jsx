import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { BookmarkProvider } from './context/BookmarkContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookmarkProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookmarkProvider>
  </React.StrictMode>
)
