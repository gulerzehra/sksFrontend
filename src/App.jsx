import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home/HomeComp';
import Clubs from './pages/Clubs/ClubsComp';
import Events from './pages/Events/EventsComp';
import Event from './pages/Events/Event/EventComp';
import Register from './pages/Register/RegisterComp';
import Login from './pages/LoginComp/LoginComp';
import ClubPage from './pages/Clubs/Club/ClubComp';
import AddEvent from './pages/AddEvent/AddEvent';
import BlogComp from './pages/Blog/BlogComp';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'clubs', element: <Clubs /> },
      { path: 'events', element: <Events /> },
      { path: 'events/:eventId', element: <Event /> },
      { path: 'clubs/:clubId', element: <ClubPage /> },
      { path: 'manage/events/add', element: <AddEvent /> },
      { path: 'manage/posts/add', element: <BlogComp /> },
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
