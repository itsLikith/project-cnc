import { BrowserRouter as Router, Routes } from 'react-router-dom';
import CommonRoutes from './common/common.routes.tsx';
import UserRoutes from './user/user.routes.tsx';
import CreatorRoutes from './creator/creator.routes.tsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>{CommonRoutes}</Routes>
      <Routes>{UserRoutes}</Routes>
      <Routes>{CreatorRoutes}</Routes>
    </Router>
  );
};

export default AppRoutes;
