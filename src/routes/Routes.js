import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Auth/Login';
import Logout from '../pages/Auth/Logout';
import Home from '../pages/Home';
import Auth from '../pages/Auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home', // Préfixé avec un `/`
        element: <Home />
      },
      {
        path: '/login', // Préfixé avec un `/`
        element: <Login />
      },
      {
        path: '/logout', // Préfixé avec un `/`
        element: <Logout />
      },
      { path : '/auth',
        element:<Auth/>
      }
    ]
  }
]);

export default router;
