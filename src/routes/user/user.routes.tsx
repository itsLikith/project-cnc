import type { JSX } from 'react';
import { Route } from 'react-router-dom';

import UserHome from '../../pages/user/home/UserHome';

const UserRoutes: JSX.Element[] = [<Route path="/user/home" element={<UserHome />} />];

export default UserRoutes;
