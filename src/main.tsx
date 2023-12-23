import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'src/assets/styles/globalStyle.css';
import { RouterProvider } from 'react-router-dom';
import router from 'src/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
