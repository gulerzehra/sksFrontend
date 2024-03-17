import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <h1>Login page</h1>,
  },
  {
    path: 'register',
    element: <h1>Register page</h1>,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <h1>Home page</h1> },
      { path: 'clubs', element: <h1>Clubs page</h1> },
      { path: 'events', element: <h1>Events page</h1> },
    ],
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
