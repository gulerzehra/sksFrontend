import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home/HomeComp';
import Clubs from './pages/Clubs/ClubsComp';
import Events from './pages/Events/EventsComp';

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
      { index: true, element: <Home /> },
      { path: 'clubs', element: <Clubs /> },
      { path: 'events', element: <Events /> },
    ],
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
