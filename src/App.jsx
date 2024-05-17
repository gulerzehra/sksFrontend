import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home/HomeComp';
import Clubs from './pages/Clubs/ClubsComp';
import Events from './pages/Events/EventsComp';
import Event from './pages/Events/Event/EventComp';
import Register from './pages/Register/RegisterComp';
import Login from './pages/Login/LoginComp';
import ClubPage from './pages/Clubs/Club/ClubComp';
import ManagerAddComp from './pages/Manager/Posts/Add/ManagerAddPostComp';
import Manager from './pages/Manager/ManagerComp';
import ManagerEvents from './pages/Manager/Events/ManagerEventsComp';
import ManagerAddEvent from './pages/Manager/Events/Add/ManagerAddEventComp';
import ManagerPosts from './pages/Manager/Posts/ManagerPostsComp';
import ManagerNotifications from './pages/Manager/Notifications/ManagerNotificationsComp';
import Admin from './pages/Admin/AdminComp';
import AdminAddClubComp from './pages/Admin/AddClub/AdminAddClubComp';
import { Toaster } from 'react-hot-toast';

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
      { path: 'clubs/:clubId', element: <ClubPage /> },
      { path: 'events', element: <Events /> },
      { path: 'events/:eventId', element: <Event /> },
      { path: 'manage', element: <Manager /> },
      { path: 'manage/events', element: <ManagerEvents /> },
      { path: 'manage/events/add', element: <ManagerAddEvent /> },
      { path: 'manage/posts', element: <ManagerPosts /> },
      { path: 'manage/posts/add', element: <ManagerAddComp /> },
      { path: 'manage/notifications', element: <ManagerNotifications /> },
      { path: 'admin', element: <Admin /> },
      { path: 'admin/clubs/add', element: <AdminAddClubComp /> },
      // Routes which will be added should be added here, not below of NotFound route
      { path: '*', element: <h1>Not found</h1> },
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Toaster />
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
