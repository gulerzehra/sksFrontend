import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home/HomeComp';
import Clubs from './pages/Clubs/ClubsComp';
import Events from './pages/Events/EventsComp';
import Event from './pages/Events/Event/EventComp';
import RegisterComp from "./pages/RegisterComp/RegisterComp";
import LoginComp from "./pages/LoginComp/LoginComp";
import ClubPage from "./pages/ClubPageComp/ClubPage";
import AddEvent from "./pages/AddEvent/AddEvent";
import BlogComp from "./pages/BlogPage/BlogComp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'clubs', element: <Clubs /> },
      { path: 'events', element: <Events /> },
      { path: 'events/:eventId', element: <Event /> },
      // Routes which will be added should be added here, not below of NotFound route
      { path: '*', element: <h1>Not found</h1> },
      {
        path: '/club', 
        element: <ClubPage />,},
      {path: '/addevent', element: <AddEvent/>},
      {path: '/addblog', element: <BlogComp/>},
    ],
  },

  
  {
    path: '/login',
    element: <LoginComp />,
  },
  {
    path: '/register',
    element: <RegisterComp />,
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
