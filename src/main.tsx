import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import AppLayout from './layout/AppLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
