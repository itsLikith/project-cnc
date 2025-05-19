import { BrowserRouter as Router, Routes } from 'react-router-dom';
import CommonRoutes from './common/common.routes.tsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>{CommonRoutes}</Routes>
    </Router>
  );
};

export default AppRoutes;
