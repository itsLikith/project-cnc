import type { JSX } from 'react';
import LandingPage from '../../pages/landing/LandingPage.tsx';
import AuthPage from '../../pages/auth/AuthPage';
import { Route } from 'react-router-dom';

const CommonRoutes: JSX.Element[] = [
  <Route path="/" element={<LandingPage />} />,
  <Route path="/auth/login" element={<AuthPage mode="login" />} />,
  <Route path="/auth/signup" element={<AuthPage mode="signup" />} />,
  <Route path="/auth/forgotpassword" element={<AuthPage mode="forgotpassword" />} />,
];

export default CommonRoutes;
