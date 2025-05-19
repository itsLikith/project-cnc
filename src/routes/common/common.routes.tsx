import type { JSX } from 'react';
import LandingPage from '@/pages/landing/LandingPage.tsx';
import { Route } from 'react-router-dom';

const CommonRoutes: JSX.Element[] = [<Route path="/" element={<LandingPage />} key="page1" />];

export default CommonRoutes;
