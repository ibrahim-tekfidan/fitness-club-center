import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import ExerciseDetailsPage from './pages/ExerciseDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'exercises/:name', element: <ExerciseDetailsPage /> },
    ],
  },
]);

export default router;
