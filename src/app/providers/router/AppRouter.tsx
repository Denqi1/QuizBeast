import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { DifficultyPage } from '@/pages/Difficulty';
import { GamePage } from '@/pages/Game';
import { CategoryPage } from '@/pages/Category';
import { ResultPage } from '@/pages/result';

const routesMap = {
  home: {
    path: '/',
    component: <HomePage />,
  },
  category: {
    path: 'category/',
    component: <CategoryPage />,
  },
  difficulty: {
    path: 'category/:categoryName/',
    component: <DifficultyPage />,
  },
  match: {
    path: 'category/:categoryName/difficulty/:difficultyLevel/',
    component: <GamePage />,
  },
  result: {
    path: 'category/:categoryName/difficulty/:difficultyLevel/game-result/',
    component: <ResultPage />,
  },
};

const createRoutes = () => {
  return Object.entries(routesMap).map(([key, value]) => {
    const { component, path } = value;

    return <Route key={key} path={path} element={component} />;
  });
};

const routes = createRoutesFromElements(createRoutes());
const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
