import { BrowserRouter as Router, Routes } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {UserRoutes}
        {AdminRoutes}
        {AuthRoutes}
      </Routes>
    </Router>
  );
};

export default AppRouter;
