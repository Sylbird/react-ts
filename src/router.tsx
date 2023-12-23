import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from 'src/Home';
import Counter from 'src/components/Counter';
import WithTimer from 'src/components/Counter/withTimer';
import Navbar from 'src/components/Navbar';
import ToDo from 'src/components/ToDo';

const router = createBrowserRouter([
  {
    path: '/',
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
        path: 'Counter',
        element: <Counter />
      },
      {
        path: 'CounterWithTimer',
        element: <WithTimer />
      },
      {
        path: 'ToDo',
        element: <ToDo />
      }
    ]
  }
]);

export default router;
