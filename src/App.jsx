import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home/HomeComp';
import Clubs from './pages/Clubs/ClubsComp';
import Events from './pages/Events/EventsComp';
import Event from './pages/Events/Event/EventComp';
import Manager from './pages/Manager/ManagerComp';
import ManagerEvents from './pages/Manager/Events/ManagerEventsComp';

const router = createBrowserRouter([
  {
    path: 'login',
    // @busraygul - Add a new route for the /login page
    element: <h1>Login page</h1>,
  },
  {
    path: 'register',
    // @gulerzehra - Add a new route for the /register page
    element: <h1>Register page</h1>,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'clubs', element: <Clubs /> },
      { path: 'events', element: <Events /> },
      { path: 'events/:eventId', element: <Event /> },
      { path: 'manage', element: <Manager /> },
      { path: 'manage/events', element: <ManagerEvents /> },
      // Routes which will be added should be added here, not below of NotFound route
      { path: '*', element: <h1>Not found</h1> },
    ],
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
