import type { JSX } from 'react';
import { Route } from 'react-router-dom';

import CreatorHome from '../../pages/creator/CreatorHome';

const CreatorRoutes: JSX.Element[] = [
  <Route path="/creator/home" element={<CreatorHome />} />,
  <Route path="/creator" element={<CreatorHome />} />,
];

export default CreatorRoutes;
