import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from 'src/components/Home';
import Counter from 'src/components/Counter';
import Navbar from 'src/components/Navbar';
import ToDo from 'src/components/ToDo';
import Clock from 'src/components/Clock';
import StableDiffusion from 'src/components/AI';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Clock',
        element: <Clock />
      },
      {
        path: '/Counter',
        element: <Counter />
      },
      {
        path: '/ToDo',
        element: <ToDo />
      },
      {
        path: '/AI',
        element: <StableDiffusion />
      }
    ]
  }
]);

export default router;
