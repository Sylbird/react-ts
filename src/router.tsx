import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from 'src/components/Home';
import Counter from 'src/components/Counter';
import Navbar from 'src/components/Navbar';
import ToDo from 'src/components/ToDo';

const router = createBrowserRouter([
  {
    path: '/react-ts',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/react-ts/Counter',
        element: <Counter />
      },
      {
        path: '/react-ts/ToDo',
        element: <ToDo />
      }
    ]
  }
]);

export default router;
