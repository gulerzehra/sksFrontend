import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <Outlet />
    </div>
  );
}

export default RootLayout;
